import {render, fireEvent} from '@testing-library/react';
import Counter from './Counter';

test('renders initial count and buttons', () => {
    const {getByText} = render(<Counter/>);

    // Check if the comopnent renders with an initial count of 0
    const countElement = getByText('Count: 0');
    expect(countElement).toBeInTheDocument();

    // Check if the Increment and Decrement buttons are present
    const incrementButton = getByText('Increment');
    const decrementButton = getByText('Decrement');
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
})

test('Increments and Decrements count when buttons are clicked', () => {
    const {getByText} = render(<Counter/>);

    const countElement = getByText('Count: 0');
    const incrementButton = getByText('Increment');
    const decrementButton = getByText('Decrement');

    // Click the "Increment" button
    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent("Count: 1");

    // Click the "Decrement" button
    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("Count: 0");
})