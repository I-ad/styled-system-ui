import { cleanup, render } from "@testing-library/react";
import * as React from "react";
import InputAtom from "./index";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";

afterAll(cleanup);
it("should Render", () => {
  const { getByPlaceholderText, asFragment } = render(
    <InputAtom placeholder="text-input" />,
  );
  const Input: any = getByPlaceholderText("text-input");
  userEvent.type(Input, "Hello");
  expect(Input.value).toEqual("Hello");
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      border: none;
      outline: none;
    }

    <input
        class="c0"
        placeholder="text-input"
        type="text"
      />
    </DocumentFragment>
  `);
});
