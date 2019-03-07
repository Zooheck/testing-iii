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
  it("lock button should fire if gate is closed", () => {
    const lockMock = jest.fn();
    const { getByTestId } = render(
      <Controls closed={true} toggleLocked={lockMock} />
    );
    const lockButton = getByTestId("lock-button");
    fireEvent.click(lockButton);
    expect(lockMock).toHaveBeenCalled();
  });
  it("gate should be closed when closed", () => {
    const { getByTestId } = render(<Controls locked={false} />);
    const { getByText } = render(<Display closed={true} />);

    const gateStatus = getByText(/closed/i);
    expect(gateStatus.textContent).toBe("Closed");
  });
  it("gate should be open when open", () => {
    const { getByTestId } = render(<Controls locked={false} />);
    const { getByText } = render(<Display closed={false} />);

    const gateStatus = getByText(/open/i);
    expect(gateStatus.textContent).toBe("Open");
  });
});
