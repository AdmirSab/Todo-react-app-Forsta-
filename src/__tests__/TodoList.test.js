import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("TodoList renders without crashing", () => {
  render(<TodoList />);
});

test("Form submission should not call `add` method if input field is empty", () => {
  const mockedAdd = jest.fn();
  render(<TodoList add={mockedAdd} />);
  const btn = screen.getByText(/add Todo/i);
  fireEvent.click(btn);
  expect(mockedAdd).not.toHaveBeenCalled();
});
