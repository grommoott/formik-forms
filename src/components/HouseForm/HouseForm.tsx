import { Formik } from "formik"
import { FC, useState } from "react"
import FormWrapper from "../FormWrapper"
import { useCreateFieldFactory } from "@/hooks"
import { Button, Center, Input, Text } from "@chakra-ui/react"
import { fieldNames, fieldTypes, initialValues, schema } from "./data"
import { Field } from "@/components/ui/field"
import { NumberInputRoot, NumberInputField } from "@/components/ui/number-input"
import { HouseFormShape } from "./types"

interface Props {}

export const HouseForm: FC<Props> = () => {
    const [createField, setCreateField] = useCreateFieldFactory()
    const [result, setResult] = useState("")

    return (
        <Center className="h-full">
            <Formik
                initialValues={initialValues}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={schema}
                onSubmit={async (valuesString) => {
                    const values = await schema.validate(valuesString)

                    setResult(JSON.stringify(values))
                    // send values to backend
                }}
            >
                <FormWrapper
                    setCreateField={setCreateField}
                    className="gap-2 w-[30rem] flex flex-col items-center"
                >
                    {Object.entries(fieldNames).map(
                        ([name, translatedName]) => {
                            switch (fieldTypes[name as keyof HouseFormShape]) {
                                case "number":
                                    return (
                                        <Field
                                            key={name}
                                            label={translatedName}
                                            width={"15rem"}
                                            {...createField.error(name)}
                                        >
                                            <NumberInputRoot width={"15rem"}>
                                                <NumberInputField
                                                    {...createField.input(name)}
                                                />
                                            </NumberInputRoot>
                                        </Field>
                                    )

                                default:
                                    return (
                                        <Field
                                            key={name}
                                            label={translatedName}
                                            {...createField.error(name)}
                                        >
                                            <Input
                                                {...createField.input(name)}
                                            />
                                        </Field>
                                    )
                            }
                        },
                    )}

                    <div className="h-4" />

                    <Button type="submit" backgroundColor={"green.500"}>
                        Отправить
                    </Button>

                    <div className="h-4" />

                    {result && (
                        <Text className="text-center text" color={"green.500"}>
                            {result}
                        </Text>
                    )}
                </FormWrapper>
            </Formik>
        </Center>
    )
}
