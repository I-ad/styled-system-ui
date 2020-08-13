import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import * as React from "react";
import InputMolecules from "./index";

afterAll(cleanup);

const Wrapper = () => {
  const [value, setValue] = React.useState("");
  const onChange = (e: any) => setValue(e.target.value);
  return <InputMolecules value={value} onChange={onChange} />;
};

it("should render without floating label", () => {
  const { container } = render(<Wrapper />);
  expect(container).not.toContainHTML("label");
});

it("should have initial value", () => {
  const { getByTestId } = render(<Wrapper />);
  const Input: any = getByTestId(/Input-Molecules-test-id/i);
  expect(Input).toHaveValue("");
});

it("should have inactive mode", () => {
  const { getByTestId } = render(
    <InputMolecules floatingLabelProps={{ label: "Input Label" }} />,
  );

  const Label = getByTestId(/label-wrapper-test-id/i);
  expect(Label.style.top).toEqual("50%");
});
it("should have active mode", () => {
  const { getByTestId } = render(
    <InputMolecules floatingLabelProps={{ label: "Input Label" }} />,
  );

  const Label = getByTestId(/label-wrapper-test-id/i);
  const Input: any = getByTestId(/Input-Molecules-test-id/i);
  user.type(Input, "Hello");
  expect(Label.style.top).toEqual("50%");
  expect(Input).toHaveValue("Hello");
});

it("should update Value", () => {
  const { getByTestId } = render(<Wrapper />);
  const Input: any = getByTestId(/Input-Molecules-test-id/i);
  user.type(Input, "Hello, World");
  expect(Input).toHaveValue("Hello, World");
});

it("should render without clear button", () => {
  const { container } = render(<InputMolecules />);
  expect(container).not.toContainHTML("button");
});
