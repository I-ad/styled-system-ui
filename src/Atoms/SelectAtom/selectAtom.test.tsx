import { cleanup, render } from "@testing-library/react";
import * as React from "react";
import SelectAtom from "./index";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";

afterAll(cleanup);
it("should Render", () => {
  const { asFragment, getByDisplayValue } = render(
    <SelectAtom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </SelectAtom>,
  );
  const Select: any = getByDisplayValue("1");
  userEvent.selectOptions(Select, "2");
  expect(Select.value).toEqual("2");
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 0 solid;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      outline: none;
    }

    <select
        class="c0"
      >
        <option>
          1
        </option>
        <option>
          2
        </option>
        <option>
          3
        </option>
      </select>
    </DocumentFragment>
  `);
});
