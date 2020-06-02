import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainComp from "../components/MainComp";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe("Main Component", () => {
  it("renders", () => {
    const { asFragment } = render(<MainComp />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders proper text in field", () => {
    const { getByTestId } = render(<MainComp />);

    userEvent.type(getByTestId("zipCode-field"), "19079");
    expect(getByTestId("zipCode-field")).toHaveAttribute("value", "19079");
  });
});
