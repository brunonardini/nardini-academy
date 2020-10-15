import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Index from "./index";

test("renders the course name", () => {
  render(<Index />);
  expect(
    screen.getByText("React Profissional", { selector: "h1" })
  ).toBeInTheDocument();
});
