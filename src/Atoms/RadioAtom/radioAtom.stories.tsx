import * as React from "react";
import BoxAtom from "../BoxAtom";
import RadioAtom from "./index";

export default {
  title: "Atoms/Radio",
};

export const Radio: React.FunctionComponent = () => (
  <BoxAtom bg="backgroundBody" p={50}>
    <RadioAtom />
  </BoxAtom>
);
