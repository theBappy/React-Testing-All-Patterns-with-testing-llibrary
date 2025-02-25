import { render, screen } from "@testing-library/react";
import GetAllByQueries from "../../src/components/GetAllByQueries";

describe("GetAllByQueries", () => {
  it("should render multiple elements that can be queries by various method", () => {
    render(<GetAllByQueries />);

    const inputsByLabelText = screen.getAllByLabelText(/Label for Input/i);
    expect(inputsByLabelText.length).toBe(2);
    inputsByLabelText.forEach((input) => {
      expect(input).toBeInTheDocument();
      expect(input).toBeDisabled();
    });

    const inputsByPlaceholderText =
      screen.getAllByPlaceholderText(/Enter something/i);
    expect(inputsByPlaceholderText.length).toBe(2);

    inputsByPlaceholderText.forEach((input) => {
      expect(input).toBeInTheDocument();
      expect(input).toBeDisabled();
    });

    const paragraphsByText = screen.getAllByText(/This is a paragraph/i);
    expect(paragraphsByText.length).toBe(2);
    paragraphsByText.forEach((paragraph) => {
      expect(paragraph).toBeInTheDocument();
    });

    const inputsByDisplayValue =
      screen.getAllByDisplayValue(/Some display value/i);
    expect(inputsByDisplayValue.length).toBe(1);
    expect(inputsByDisplayValue[0]).toBeInTheDocument();
    expect(inputsByDisplayValue[0]).toBeDisabled();

    const imagesByAnotherAltText =
      screen.getAllByAltText(/Another sample image/i);
    expect(imagesByAnotherAltText.length).toBe(1);
    expect(imagesByAnotherAltText[0]).toBeInTheDocument();

    const buttonsByRole = screen.getAllByRole("button", {
      name: /This is a button/i,
    });
    expect(buttonsByRole.length).toBe(2);
    buttonsByRole.forEach((button) => {
      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
    });

    const divsByTestId = screen.getAllByTestId(/custom-test-id/i);
    expect(divsByTestId.length).toBe(2);

    divsByTestId.forEach((div) => {
      expect(div).toBeInTheDocument();
    });
  });
});
