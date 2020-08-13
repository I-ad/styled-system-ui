import { cleanup, render } from "@testing-library/react";
import "jest-styled-components";
import * as React from "react";
import BoxAtom from "./index";

afterEach(cleanup);

it("should match snapshot", () => {
  const { asFragment } = render(<BoxAtom width={200} height={200} bg="red" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      width: 200px;
      height: 200px;
      background-color: red;
    }

    <div
        class="c0"
        height="200"
        width="200"
      />
    </DocumentFragment>
  `);
});
