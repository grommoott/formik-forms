import { Formik } from "formik"
import { FC } from "react"
import FormWrapper from "./FormWrapper"
import { useCreateFieldFactory } from "../hooks"
import { Provider } from "@/components/ui/provider"
import { Radio, RadioGroup } from "./ui/radio"
import { Button, Stack } from "@chakra-ui/react"
import { Checkbox } from "./ui/checkbox"

const FormTest: FC = () => {
    const [createField, setCreateField] = useCreateFieldFactory()

    return (
        <Provider>
            <Formik
                initialValues={{
                    radioValue: "",
                    checkboxValue1: false,
                    checkboxValue2: false,
                }}
                onSubmit={(values) => console.log(values)}
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
        </Provider>
    )
}

export default FormTest
