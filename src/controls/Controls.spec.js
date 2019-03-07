import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";

import Controls from "./Controls";

describe("gate controls being disabled", () => {
  it("gate button should be disabled when closed and locked", () => {
    const { getByTestId } = render(<Controls locked={true} closed={true} />);
    const gateButton = getByTestId("gate-button");

    expect(gateButton).toBeDisabled();
  });
  it("gate button should be enabled when unlocked", () => {
    const { getByTestId } = render(<Controls locked={false} closed={true} />);
    const gateButton = getByTestId("gate-button");

    expect(gateButton).not.toBeDisabled();
  });
});

describe("lock controls being disabled", () => {
  it("lock button should be disabled when gate is open", () => {
    const { getByTestId } = render(<Controls locked={false} closed={false} />);

    const lockButton = getByTestId("lock-button");
    expect(lockButton).toBeDisabled();
  });
});
