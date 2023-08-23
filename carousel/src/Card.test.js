import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

//smoke test
it("renders without crashing", function () {
  render(<Card
      caption="testcaption"
      src="test1.com"
      currNum="2"
      totalNum="4"/>)
});


//snapshot test
it("matches snapshot", function () {
  const { container } = render(<Card
      caption="testcaption"
      src="test1.com"
      currNum="2"
      totalNum="4"/>);
  expect(container).toMatchSnapshot();
})