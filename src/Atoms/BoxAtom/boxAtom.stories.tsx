import * as React from "react";
import BoxAtom from "./index";

export default {
  title: "Atoms/Box",
};

export const Box: React.FunctionComponent = () => (
  <BoxAtom p={60} bg="backgroundBody">
    <BoxAtom width={200} height={200} bg="primaryFirst" />
  </BoxAtom>
);
