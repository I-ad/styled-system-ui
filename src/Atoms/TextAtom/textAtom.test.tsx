import { cleanup, render } from "@testing-library/react";
import * as React from "react";
import TextAtom from "./index";
import "jest-styled-components";

afterAll(cleanup);

it("should Render", () => {
  const { asFragment, getByText } = render(<TextAtom>Hello</TextAtom>);
  getByText("Hello");
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    <p
        class="c0"
      >
        Hello
      </p>
    </DocumentFragment>
  `);
});
