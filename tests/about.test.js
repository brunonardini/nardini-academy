import React from "react";
import { render, screen } from "@testing-library/react";

import About from "../pages/about";

test("renders the title", () => {
  render(<About />);
  expect(
    screen.getByText("Nardini Academy", { selector: "h1" })
  ).toBeInTheDocument();
});
