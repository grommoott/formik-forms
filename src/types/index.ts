import {
    CheckboxCheckedChangeDetails,
    RadioGroupValueChangeDetails,
} from "@chakra-ui/react"
import {
    ChangeEventHandler,
    FocusEventHandler,
    HTMLInputTypeAttribute,
} from "react"

export type CreateInputFieldFunction = (
    name: string,
    options?: {
        type?: HTMLInputTypeAttribute
        defaultValue?: any
        value?: any
    },
) => {
    onChange?: ChangeEventHandler
    onBlur?: FocusEventHandler
    name?: string
    value?: any
    type?: HTMLInputTypeAttribute
    defaultValue?: any
}

export type CreateRadioFieldFunction = (name: string) => {
    onValueChange?: (details: RadioGroupValueChangeDetails) => void
}

export type CreateCheckboxFieldFunction = (name: string) => {
    onCheckedChange?: (details: CheckboxCheckedChangeDetails) => void
}

export type CreateErrorFieldFunction = (name: string) => {
    errorText?: string
}

export type CreateFieldFunctions = {
    input: CreateInputFieldFunction
    radio: CreateRadioFieldFunction
    checkbox: CreateCheckboxFieldFunction
    error: CreateErrorFieldFunction
}
