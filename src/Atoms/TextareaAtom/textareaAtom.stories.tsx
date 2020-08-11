import * as React from "react";
import TextareaAtom from "./index";
import BoxAtom from "../BoxAtom";

export default {
  title: "Atoms/Textarea",
};

export const Textarea: React.FunctionComponent = () => (
  <BoxAtom bg="backgroundBody" p={60}>
    <TextareaAtom variant="input" height={100} placeholder="Placeholder" />
  </BoxAtom>
);
