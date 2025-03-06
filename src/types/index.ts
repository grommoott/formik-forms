import {
    CheckboxCheckedChangeDetails,
    RadioGroupValueChangeDetails,
} from "@chakra-ui/react"
import {
    ChangeEventHandler,
    FocusEventHandler,
    HTMLInputTypeAttribute,
} from "react"

export type CreateBasicFieldFunction = (
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

export type CreateFieldFunctions = {
    basic: CreateBasicFieldFunction
    radio: CreateRadioFieldFunction
    checkbox: CreateCheckboxFieldFunction
}
