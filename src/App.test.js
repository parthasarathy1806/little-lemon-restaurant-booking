import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders booking section", () => {
  render(<App />);

  const heading = screen.getByText(/reserve a table/i);

  expect(heading).toBeInTheDocument();
});