import { render, screen, waitFor } from "@testing-library/react";

import Home from "../pages/index";

test("renders the title", async () => {
  render(<Home />);

  const title = await waitFor(() =>
    screen.getByText("Uma História de Aprendizado e Crescimento", {
      selector: "h1",
    }),
  );

  expect(title).toBeInTheDocument();
});

test("renders the Nardini Academy text", async () => {
  render(<Home />);

  const academyText = await waitFor(() =>
    screen.getByText("Nardini Academy", { selector: "span" }),
  );

  expect(academyText).toBeInTheDocument();
});

test("renders social media buttons in hero section", async () => {
  render(<Home />);

  const heroSection = screen.getByTestId("hero-section");
  const blogButton = await waitFor(() => screen.getByText("Blog"));
  const linkedinButton = await waitFor(() =>
    screen.getByTestId("hero-linkedin-button"),
  );
  const twitterButton = await waitFor(() => screen.getByText("Twitter"));

  expect(blogButton).toBeInTheDocument();
  expect(linkedinButton).toBeInTheDocument();
  expect(twitterButton).toBeInTheDocument();
});
