import * as React from "react";
import BoxAtom from "./index";

export default {
  title: "Atoms/Box",
};

export const Box: React.FunctionComponent = () => (
  <BoxAtom p={60} bg="primaryFirst">
    <BoxAtom width={400} height={400} bg="backgroundBody" />
  </BoxAtom>
);
