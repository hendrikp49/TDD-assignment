import Home from "@/components/pages/home";
import { render } from "@testing-library/react";

describe("Home Component", () => {
  it("render home component", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
