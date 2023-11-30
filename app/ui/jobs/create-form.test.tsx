import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { JobCreateForm } from "./create-form";

describe("JobCreateForm", () => {
  it("renders a heading", () => {
    render(<JobCreateForm companies={[]} />);

    const heading = screen.getByText("my jobs");

    expect(heading).toBeInTheDocument();
  });
});
