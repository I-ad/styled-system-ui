import * as React from "react";
import BoxAtom from "../BoxAtom";
import CheckboxAtom from "./index";

export default {
  title: "Atoms/Checkbox",
};

export const Checkbox: React.FunctionComponent = () => (
  <BoxAtom bg="backgroundBody" p={50}>
    <CheckboxAtom />
  </BoxAtom>
);
