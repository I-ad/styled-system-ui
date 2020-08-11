import * as React from "react";
import { IconAtom, IconsBucket } from "./index";
import BoxAtom from "../BoxAtom";
import TextAtom from "../TextAtom";

export default {
  title: "Atoms/Icon",
};

export const Icons = (): any => {
  const keys: string[] = Object.keys(IconsBucket.all);
  return (
    <BoxAtom p={40} display="flex" flexDirection="row" flexWrap="wrap">
      {keys.map((icon) => (
        <BoxAtom key={icon} m={60} textAlign="center">
          <IconAtom name={icon} color="#000" />
          <TextAtom mt={8}>{icon}</TextAtom>
        </BoxAtom>
      ))}
    </BoxAtom>
  );
};
