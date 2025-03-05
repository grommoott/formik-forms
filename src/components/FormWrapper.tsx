import {
    CSSProperties,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
} from "react"
import { FormikContext } from "formik"
import {
    CreateBasicFieldFunction,
    CreateCheckboxFieldFunction,
    CreateFieldFunctions,
    CreateRadioFieldFunction,
} from "./types"

interface Props {
    setCreateField?: Dispatch<SetStateAction<CreateFieldFunctions>>
    children?: ReactNode
    className?: string
    style?: CSSProperties
}

const FormWrapper: FC<Props> = ({
    setCreateField = () => {},
    children,
    className,
    style,
}) => {
    const formikContext = useContext(FormikContext)

    useEffect(() => {
        const basic: CreateBasicFieldFunction = (name, options) => ({
            ...options,
            name,
            value: options?.value || formikContext.values[name],
            onChange: formikContext.handleChange,
            onBlur: formikContext.handleBlur,
        })

        const radio: CreateRadioFieldFunction = (name) => ({
            onValueChange: (details) =>
                formikContext.setFieldValue(name, details.value),
        })

        const checkbox: CreateCheckboxFieldFunction = (name) => ({
            onCheckedChange: (details) =>
                formikContext.setFieldValue(name, details.checked),
        })

        setCreateField({ basic, radio, checkbox })
    }, [])

    return (
        <form
            className={`contents ${className}`}
            style={style}
            onSubmit={formikContext.handleSubmit}
        >
            {children}
        </form>
    )
}

export default FormWrapper
