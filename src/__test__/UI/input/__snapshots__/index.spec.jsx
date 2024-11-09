import Input from "@/components/UI/input";
import { render } from "@testing-library/react";

describe("Input Component", () => {
  it("render input component", () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
  it("render input textarea", () => {
    const { container } = render(<Input type="textarea" value="" />);
    expect(container).toMatchSnapshot();
  });
});
