import {
    ChangeEventHandler,
    CSSProperties,
    Dispatch,
    FC,
    FocusEventHandler,
    HTMLInputTypeAttribute,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
} from "react"
import { FormikContext } from "formik"

// Types and interfaces

export type CreateFieldFunction = (name: string) => {
    onChange?: ChangeEventHandler
    onBlur?: FocusEventHandler
    name?: string
    value?: any
    type?: HTMLInputTypeAttribute
    defaultValue?: any
}

interface Props {
    setCreateField?: Dispatch<SetStateAction<CreateFieldFunction>>
    children?: ReactNode
    className?: string
    style?: CSSProperties
}

// FormWrapper

const FormWrapper: FC<Props> = ({
    setCreateField = () => {},
    children,
    className,
    style,
}) => {
    const formikContext = useContext(FormikContext)

    useEffect(() => {
        const value = (
            name: string,
            options?: { type?: HTMLInputTypeAttribute; defaultValue?: any },
        ) => {
            return {
                ...options,
                name,
                value: formikContext.values[name],
                onChange: formikContext.handleChange,
                onBlur: formikContext.handleBlur,
            }
        }

        setCreateField(() => value)
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
