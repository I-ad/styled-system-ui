import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import ButtonAtom from "./index";
import "jest-styled-components";
afterAll(cleanup);

it("should Render", () => {
  const mockOnClick = jest.fn();
  const { asFragment, getByText } = render(
    <ButtonAtom onClick={mockOnClick}>Add</ButtonAtom>,
  );
  const Button = getByText("Add");
  userEvent.click(Button);
  expect(mockOnClick).toBeCalled();
  expect(mockOnClick).toBeCalledTimes(1);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      display: inline-block;
      text-align: center;
      line-height: inherit;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-size: inherit;
      border: 0;
      cursor: pointer;
      padding: 0;
      background: none;
      box-sizing: border-box;
      pointer-events: auto;
    }

    .c0 svg {
      vertical-align: middle;
    }

    <button
        class="c0"
      >
        Add
      </button>
    </DocumentFragment>
  `);
});
