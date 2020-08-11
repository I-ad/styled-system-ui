import { cleanup, render } from "@testing-library/react";
import * as React from "react";
import TextareaAtom from "./index";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";

afterAll(cleanup);

it("should Render", () => {
  const { asFragment, getByPlaceholderText } = render(
    <TextareaAtom placeholder="placeholder" />,
  );
  const Textarea: any = getByPlaceholderText("placeholder");
  userEvent.type(Textarea, "Hello!");
  expect(Textarea.value).toEqual("Hello!");
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

    <textarea
        class="c0"
        placeholder="placeholder"
      />
    </DocumentFragment>
  `);
});
