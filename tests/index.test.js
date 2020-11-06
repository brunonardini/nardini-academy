import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import Home from "../pages/index";

test("renders the course name", async () => {
  render(<Home />);

  const title = await waitFor(() =>
    screen.getByText("React Profissional", { selector: "h1" })
  );

  expect(title).toBeInTheDocument();
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
