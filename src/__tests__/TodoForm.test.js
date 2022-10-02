import React from "react";
import { screen, render } from "@testing-library/react";
import TodoForm from "../components/TodoForm";

test("TodoForm renders without crashing", () => {
  render(<TodoForm />);
});

test("AddTodo contains input field and it has focus on mount", () => {
  render(<TodoForm />);
  const inputField = screen.getByPlaceholderText("Add a todo");
  expect(inputField).toHaveFocus();
});
