import * as React from "react";
import BoxAtom from "../BoxAtom";
import SelectAtom from "./index";

export default {
  title: "Atoms/Select",
};

export const Select: React.FunctionComponent = () => (
  <BoxAtom bg="backgroundBody" p={60}>
    <SelectAtom variant="input" width={400}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </SelectAtom>
  </BoxAtom>
);
