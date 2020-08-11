import * as React from "react";
import BoxAtom from "../BoxAtom";
import TextAtom from "./index";

export default {
  title: "Atoms/Text",
};

export const Text: React.FunctionComponent = () => (
  <BoxAtom bg="backgroundBody" p={60}>
    <TextAtom as="h1" color="textFirst">
      Text Atom
    </TextAtom>
  </BoxAtom>
);
