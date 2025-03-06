import { Formik } from "formik"
import { FC, useState } from "react"
import FormWrapper from "../components/FormWrapper"
import { useCreateFieldFactory } from "../hooks"
import { Provider } from "../components/ui/provider"
import { Radio, RadioGroup } from "../components/ui/radio"
import { Button, Stack } from "@chakra-ui/react"
import { Checkbox } from "@/components/ui/checkbox"

const RadioAndCheckbox: FC = () => {
    const [createField, setCreateField] = useCreateFieldFactory()

    const [values, setValues] = useState<{
        radioValue: string
        checkboxValue1: boolean
        checkboxValue2: boolean
    }>()

    return (
        <Provider>
            <Formik
                initialValues={{
                    radioValue: "",
                    checkboxValue1: false,
                    checkboxValue2: false,
                }}
                onSubmit={(values) => {
                    console.log(values)
                    setValues(values)
                }}
            >
                <FormWrapper setCreateField={setCreateField}>
                    <RadioGroup {...createField.radio("radioValue")}>
                        <Stack>
                            <Radio value="1">Один</Radio>
                            <Radio value="2">Два</Radio>
                            <Radio value="3">Три</Radio>
                        </Stack>
                    </RadioGroup>
                    <Checkbox {...createField.checkbox("checkboxValue1")}>
                        1
                    </Checkbox>
                    <Checkbox {...createField.checkbox("checkboxValue2")}>
                        2
                    </Checkbox>
                    <Button type="submit">Отправить</Button>
                </FormWrapper>
            </Formik>

            {values && <h1>{JSON.stringify(values)}</h1>}
        </Provider>
    )
}

export default RadioAndCheckbox
