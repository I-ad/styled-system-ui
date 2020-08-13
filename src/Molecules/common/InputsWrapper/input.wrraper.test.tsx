import { cleanup, render } from "@testing-library/react";
import React from "react";
import FloatingLabel from "./FloatingLabel";
import { IconContainer } from "./IconContainer";

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
        data-testid="label-wrapper-test-id"
        style="pointer-events: none; position: absolute; left: 0px; transform: scale(0.75) translate(12px, -50%); top: 0%; transform-origin: top left; z-index: 1;"
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

it("should render IconContainer", () => {
  const { asFragment } = render(
    <IconContainer>
      <div style={{ width: 24, height: 24 }} />
    </IconContainer>,
  );

  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-AxirZ kBYgIr"
        display="flex"
        style="transform: translateY(-50%); pointer-events: none;"
      >
        <div
          style="width: 24px; height: 24px;"
        />
      </div>
    </DocumentFragment>
  `);
});
