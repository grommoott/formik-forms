import { number, object, string } from "yup"
import { HouseFormShape } from "../types"
import { maxValueError, minValueError, requiredFieldError } from "../errors"
import { HTMLInputTypeAttribute } from "react"

export const initialValues: HouseFormShape = {
    name: "",
    address: "",
    floor: 1,
    totalFloors: 3,
    square: 0,
    livingSquare: 0,
    kitchenSquare: 0,
}

export const fieldNames: HouseFormShape<string> = {
    name: "Название объекта",
    address: "Адрес",
    floor: "Этаж",
    totalFloors: "Количество этажей в доме",
    square: "Площадь",
    livingSquare: "Жилая площадь",
    kitchenSquare: "Площадь кухни",
}

export const fieldTypes: HouseFormShape<HTMLInputTypeAttribute> = {
    name: "text",
    address: "text",
    floor: "number",
    totalFloors: "number",
    square: "number",
    livingSquare: "number",
    kitchenSquare: "number",
}

export const schema = object<HouseFormShape>({
    name: string().required(requiredFieldError),
    address: string().required(requiredFieldError),
    floor: number()
        .required(requiredFieldError)
        .integer()
        .min(-1, minValueError)
        .test((value, context) => {
            const schema: HouseFormShape = context.schema

            if (schema.totalFloors < value) {
                context.createError({
                    message: maxValueError({ max: schema.totalFloors }),
                })
            }

            return true
        }),
    totalFloors: number()
        .required(requiredFieldError)
        .integer()
        .min(3, minValueError)
        .max(200, maxValueError),
    square: number()
        .required(requiredFieldError)
        .min(0, minValueError)
        .max(400, maxValueError)
        .test((value, context) => {
            const schema: HouseFormShape = context.parent

            console.log(schema)
            console.log(value)

            if (schema.livingSquare + schema.kitchenSquare >= value) {
                return context.createError({
                    message:
                        "Общая площадь должна быть больше суммы жилой площади и площади кухни",
                })
            }

            return true
        }),
    livingSquare: number().required(requiredFieldError).min(0, minValueError),
    kitchenSquare: number().required(requiredFieldError).min(0, minValueError),
})
