import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Table } from "./table";

describe("Table", () => {
  it("renders a heading", () => {
    render(<Table />);

    const heading = screen.getByText("my jobs");

    expect(heading).toBeInTheDocument();
  });
});
