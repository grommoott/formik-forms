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
    CreateInputFieldFunction,
    CreateCheckboxFieldFunction,
    CreateFieldFunctions,
    CreateRadioFieldFunction,
    CreateErrorFieldFunction,
} from "../types"

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
        const input: CreateInputFieldFunction = (name, options) => ({
            ...options,
            name,
            defaultValue: options?.value || formikContext.values[name],
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

        const error: CreateErrorFieldFunction = (name) => ({
            errorText: String(formikContext.errors[name]),
        })

        setCreateField({ input, radio, checkbox, error })
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
