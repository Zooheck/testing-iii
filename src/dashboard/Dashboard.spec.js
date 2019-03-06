import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";

import Dashboard from "./Dashboard";
import Controls from "../controls/Controls";
import Display from "../display/Display";

let state = {
  locked: false,
  closed: false
};

const { locked, closed } = state;

describe("app functionality", () => {
  it("gate button should fire", () => {
    const gateMock = jest.fn();
    const { getByTestId } = render(<Controls toggleClosed={gateMock} />);
    const gateButton = getByTestId("gate-button");
    fireEvent.click(gateButton);
    expect(gateMock).toHaveBeenCalled();
  });
});
