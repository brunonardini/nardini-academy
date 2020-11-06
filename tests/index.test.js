import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Home from "../pages/index";

test("renders the course name", () => {
  render(<Home />);
  expect(
    screen.getByText("React Profissional", { selector: "h1" })
  ).toBeInTheDocument();
});

test("triggers call to action", () => {
  const scrollIntoView = jest.fn();
  document.querySelector = jest.fn();
  document.querySelector.mockReturnValue({
    scrollIntoView,
  });

  render(<Home />);

  fireEvent.click(screen.getByText("Saiba mais"));

  expect(scrollIntoView).toHaveBeenCalledTimes(1);
});
