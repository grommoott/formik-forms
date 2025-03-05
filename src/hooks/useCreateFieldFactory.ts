import { useState } from "react"
import { CreateFieldFunction } from "../components/FormWrapper"

export const useCreateFieldFactory = () => {
    const defaultValue: CreateFieldFunction = (name) => ({ name })

    return useState<CreateFieldFunction>(() => defaultValue)
}
