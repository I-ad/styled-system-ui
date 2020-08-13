import * as React from "react";
import { BoxAtom } from "../../index";
import DropdownMolecules from "./index";

export default {
  title: "Molecules/Dropdown",
};

export const Dropdown = () => (
  <BoxAtom p={60} bg="#f1f1f1" height={1000}>
    <DropdownMolecules
      avatar={<BoxAtom width={24} height={24} bg="blue" />}
      title={{
        text: "Title",
      }}
      subtitle={{
        text: "Subtitle",
      }}
      suggestionsList={{}}
    />
  </BoxAtom>
);
