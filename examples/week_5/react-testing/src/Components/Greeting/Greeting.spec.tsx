import { act, fireEvent, render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
    test("renders Hello World as a text", () => {
        render(<Greeting/>);

        const helloWorldElement = screen.getByText("Hello World", {exact: false});;

        expect(helloWorldElement).toBeInTheDocument();
    });

    test("renders it's nice to meet you as a text on load", () => {
        render(<Greeting/>);

        const textElement = screen.getByText("It's nice to meet you");
        expect(textElement).toBeInTheDocument();
    });

    test("renders I have been changed when change text button has been clicked", () => {
        render(<Greeting/>);

        const changeTextButton = screen.getByRole('button');
        act(() => {
            fireEvent.click(changeTextButton);
        })
        const textElement = screen.getByText("I have been changed");
        expect(textElement).toBeInTheDocument();
    });

    test("does not render 'it's nice to meet you' when button is clicked twice", () => {
        render(<Greeting/>);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        fireEvent.click(button);
        const outputElement = screen.queryByText("It's nice to meet you");
        expect(outputElement).not.toBeInTheDocument();
    })
})