import {
    CheckboxCheckedChangeDetails,
    RadioGroupValueChangeDetails,
} from "@chakra-ui/react"
import { ChangeEventHandler, FocusEventHandler } from "react"

export type CreateInputFieldFunction = (
    name: string,
    options?: {
        defaultValue?: any
    },
) => {
    onChange?: ChangeEventHandler
    onBlur?: FocusEventHandler
    name?: string
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
    invalid: boolean
}

export type CreateFieldFunctions = {
    input: CreateInputFieldFunction
    radio: CreateRadioFieldFunction
    checkbox: CreateCheckboxFieldFunction
    error: CreateErrorFieldFunction
}
