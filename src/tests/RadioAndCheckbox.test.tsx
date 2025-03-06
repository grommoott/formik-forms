import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { describe, expect, test } from "vitest"
import RadioAndCheckbox from "./RadioAndCheckbox"
import "@testing-library/jest-dom"

describe("radio and checkboxes form", () => {
    test("basic interractions", async () => {
        render(<RadioAndCheckbox />)

        userEvent.click(screen.getByText(/один/i))
        userEvent.click(screen.getByText(/2/i))
        userEvent.click(screen.getByText(/отправить/i))

        await screen.findByRole("heading")

        expect(screen.getByRole("heading")).toHaveTextContent(
            JSON.stringify({
                radioValue: "1",
                checkboxValue1: false,
                checkboxValue2: true,
            }),
        )
    })

    test("single radio", async () => {
        render(<RadioAndCheckbox />)

        userEvent.click(screen.getByText(/один/i))
        userEvent.click(screen.getByText(/три/i))
        userEvent.click(screen.getByText(/два/i))
        userEvent.click(screen.getByText(/отправить/i))

        await screen.findByRole("heading")

        expect(screen.getByRole("heading")).toHaveTextContent(
            JSON.stringify({
                radioValue: "2",
                checkboxValue1: false,
                checkboxValue2: false,
            }),
        )
    })
})
