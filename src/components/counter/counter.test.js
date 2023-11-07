import {
    render, screen
} from '@testing-library/react';
import Counter from "./counter";

test('Counter test', () => {
    render(<Counter />);
    const value = Number(screen.getByTestId("count").textContent);
    expect(value).toEqual(0);
})