import { render } from "@testing-library/react";
import React from "react";
import { axe } from "jest-axe";
import Home from "../pages/index";

test("it works", async () => {
  const { getByText, container } = render(<Home />);
  const span = getByText("Hello World!");
  expect(span).toHaveTextContent("Hello World!");

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
