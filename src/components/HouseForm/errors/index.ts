export const requiredFieldError = "Поле обязательно для заполнения"

export const minValueError = ({ min }: { min: number }) =>
    `Значение не может быть меньше ${min}`

export const maxValueError = ({ max }: { max: number }) =>
    `Значение не может быть больше ${max}`
