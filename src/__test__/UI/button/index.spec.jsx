import Button from "@/components/UI/button";
import { render, fireEvent } from "@testing-library/react";

describe("Button Component", () => {
  it("render button component", () => {
    const { container } = render(<Button onClick={jest.fn()}>test</Button>);
    expect(container).toMatchSnapshot();
  });
  it("handle button click", () => {
    const clickFunction = jest.fn();
    const { getByText } = render(<Button onClick={clickFunction}>test</Button>);
    fireEvent.click(getByText("test"));
    expect(clickFunction).toHaveBeenCalled();
  });
});
