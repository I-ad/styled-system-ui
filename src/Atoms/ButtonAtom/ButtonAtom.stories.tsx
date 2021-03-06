import { select } from "@storybook/addon-knobs";
import * as React from "react";
import BoxAtom from "../BoxAtom";
import ButtonAtom from "./index";

export default {
  title: "Atoms/Button",
};

export const Button: React.FunctionComponent = () => (
  <BoxAtom bg="backgroundBody" p={60}>
    <ButtonAtom
      width={400}
      variant={select("Variant", ["", "primary", "secondary"], "primary")}
    >
      Click me
    </ButtonAtom>
  </BoxAtom>
);
