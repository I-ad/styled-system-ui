import * as React from "react";
import InputAtom from "./index";
import { boolean, select } from "@storybook/addon-knobs";
import BoxAtom from "../BoxAtom";

export default {
  title: "Atoms/Input",
};

export const Input: React.FunctionComponent = () => {
  return (
    <BoxAtom p={40} bg="backgroundBody">
      <InputAtom
        variant={select("Variant", ["", "inputStyle"], "input")}
        disabled={boolean("Disabled", false)}
        autoFocus={true}
      />
    </BoxAtom>
  );
};
