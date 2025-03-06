import {
    CreateBasicFieldFunction,
    CreateCheckboxFieldFunction,
    CreateFieldFunctions,
    CreateRadioFieldFunction,
} from "@/types"
import { useState } from "react"

const useCreateFieldFactory = () => {
    const basic: CreateBasicFieldFunction = () => ({})
    const radio: CreateRadioFieldFunction = () => ({})
    const checkbox: CreateCheckboxFieldFunction = () => ({})

    return useState<CreateFieldFunctions>({ basic, radio, checkbox })
}

export { useCreateFieldFactory }
