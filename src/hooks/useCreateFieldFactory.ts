import {
    CreateBasicFieldFunction,
    CreateCheckboxFieldFunction,
    CreateFieldFunctions,
    CreateRadioFieldFunction,
} from "@/components/types"
import { useState } from "react"

export const useCreateFieldFactory = () => {
    const basic: CreateBasicFieldFunction = () => ({})
    const radio: CreateRadioFieldFunction = () => ({})
    const checkbox: CreateCheckboxFieldFunction = () => ({})

    return useState<CreateFieldFunctions>({ basic, radio, checkbox })
}
