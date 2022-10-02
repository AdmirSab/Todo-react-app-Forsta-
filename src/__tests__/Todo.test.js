import React from "react";
import { render } from "@testing-library/react";
import Todo from "../components/Todo";

test("Todo renders without crashing", () => {
  render(<Todo />);
});
