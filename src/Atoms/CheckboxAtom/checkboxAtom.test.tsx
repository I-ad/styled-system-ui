import { cleanup, render } from "@testing-library/react";
import * as React from "react";
import CheckboxAtom from "./index";

afterAll(cleanup);

it("should Render", () => {
  const { asFragment } = render(<CheckboxAtom />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-AxjAm dWbuBY"
        display="inline-block"
        height="24"
        width="24"
      >
        <input
          class="sc-AxhUy exdTKN"
          type="checkbox"
        />
        <div
          aria-hidden="true"
          class="sc-AxiKw gFXSCX"
        >
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <g
              fill="none"
              fill-rule="nonzero"
            >
              <rect
                fill="none"
                height="24"
                rx="1"
                width="24"
              />
              <path
                d="M19.273 4H4.727A.727.727 0 0 0 4 4.727v14.546c0 .401.326.727.727.727h14.546a.727.727 0 0 0 .727-.727V4.727A.727.727 0 0 0 19.273 4zM10.58 15.973l-3.246-3.246L8.364 11.7l2.146 2.146 5.058-5.78 1.095.958-6.082 6.95z"
                fill="checked"
              />
            </g>
          </svg>
        </div>
        <div
          class="sc-AxhCb kuZPhb"
        >
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <g
              fill="none"
              fill-rule="evenodd"
            >
              <rect
                fill="none"
                fill-rule="nonzero"
                height="24"
                rx="1"
                width="24"
              />
              <path
                d="M4 4h16v16H4z"
                stroke="unchecked"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.6"
              />
            </g>
          </svg>
        </div>
      </div>
    </DocumentFragment>
  `);
});
