import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";

afterEach(cleanup);

describe("Header Component", () => {
  it("renders", () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("shows page main title", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("site-title")).toHaveTextContent(/React Weather App/);
  });
});
