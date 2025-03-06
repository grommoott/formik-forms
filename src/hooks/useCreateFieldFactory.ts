import {
    CreateInputFieldFunction,
    CreateCheckboxFieldFunction,
    CreateFieldFunctions,
    CreateRadioFieldFunction,
    CreateErrorFieldFunction,
} from "@/types"
import { useState } from "react"

const useCreateFieldFactory = () => {
    const input: CreateInputFieldFunction = () => ({})
    const radio: CreateRadioFieldFunction = () => ({})
    const checkbox: CreateCheckboxFieldFunction = () => ({})
    const error: CreateErrorFieldFunction = () => ({})

    return useState<CreateFieldFunctions>({ input, radio, checkbox, error })
}

export { useCreateFieldFactory }
