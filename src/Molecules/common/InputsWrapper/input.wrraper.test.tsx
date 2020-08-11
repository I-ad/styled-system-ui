import { cleanup, render } from "@testing-library/react";
import React from "react";
import FloatingLabel from "./FloatingLabel";

afterEach(cleanup);

it("should Render floatingLabel", () => {
  const mockActiveLabel = true;
  const { asFragment, getByText } = render(
    <FloatingLabel isActive={mockActiveLabel} left={24} label="Label" />,
  );
  expect(getByText("Label")).toBeTruthy();

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        style="pointer-events: none; position: absolute; left: 0px; transform: scale(0.75) translate(12px, -50%; top: 0%; transform-origin: top left; z-index: 1;"
      >
        <label
          class="sc-AxjAm joWpKk"
        >
          Label
        </label>
        <div
          class="sc-AxirZ jJyRyy"
          height="50%"
          width="100%"
        />
      </div>
    </DocumentFragment>
  `);
});
