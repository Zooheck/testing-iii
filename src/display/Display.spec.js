import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";

import Display from "./Display";

describe("display component", () => {
  it("should default to displaying both open/unlocked", () => {
    const { getByText } = render(<Display />);

    const lockDisplay = getByText(/unlocked/i);
    const openDisplay = getByText(/open/i);

    expect(lockDisplay.textContent).toBe("Unlocked");
    expect(openDisplay.textContent).toBe("Open");
  });
});
