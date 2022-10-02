import { render, screen } from "@testing-library/react";
import App from "../../src/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/What are we going to do today Boss?/i);
  expect(linkElement).toBeInTheDocument();
});
