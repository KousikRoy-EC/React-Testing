import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("renders a counter", () => {
    const { getByText } = render(<Counter />);
    const counter = getByText(/count/i);
    expect(counter).toBeInTheDocument();
    });

test("starts at zero", () => {
    const { getByText } = render(<Counter />);
    const count = getByText(/count: 0/i);
    expect(count).toBeInTheDocument();
    }
);

test("increments the count", () => {
    const { getByText } = render(<Counter />);
    const increment = getByText(/increment/i);
    fireEvent.click(increment);
    const count = getByText(/count: 1/i);
    expect(count).toBeInTheDocument();
    }
);

test("decrements the count", () => {
    const { getByText } = render(<Counter />);
    const decrement = getByText(/decrement/i);
    fireEvent.click(decrement);
    const count = getByText(/count: -1/i);
    expect(count).toBeInTheDocument();
    }
);

test("increments and decrements the count", () => {
    const { getByText } = render(<Counter />);
    const increment = getByText(/increment/i);
    const decrement = getByText(/decrement/i);
    fireEvent.click(increment);
    fireEvent.click(increment);
    fireEvent.click(decrement);
    const count = getByText(/count: 1/i);
    expect(count).toBeInTheDocument();
    }
);

