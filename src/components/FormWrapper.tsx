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
            name,
            defaultValue: options?.defaultValue || formikContext.values[name],
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

        setCreateField((prev) => ({ ...prev, input, radio, checkbox }))
    }, [])

    useEffect(() => {
        const error: CreateErrorFieldFunction = (name) => {
            return {
                invalid: !!formikContext.errors[name],
                errorText: String(formikContext.errors[name]),
            }
        }

        setCreateField((prev) => ({ ...prev, error }))
    }, [formikContext.errors])

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
