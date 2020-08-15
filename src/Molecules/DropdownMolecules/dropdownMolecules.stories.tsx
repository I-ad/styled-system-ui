import { useState } from "react";
import * as React from "react";
import { BoxAtom } from "../../index";
import DropdownMolecules from "./index";

export default {
  title: "Molecules/Dropdown",
};

export const Dropdown = (): any => {
  const [value, setValue] = useState("Title");
  const items = ["1", "2", "3", "4", "5"];
  const RenderList = () => {
    if (items.length === 0) {
      return null;
    }
    return items.map((x) => {
      const onClick = () => {
        setValue(x);
      };
      return (
        <BoxAtom
          themeKey="dropdownStyle"
          key={x}
          onClick={onClick}
          variant="itemList"
        >
          {x}
        </BoxAtom>
      );
    });
  };
  const Options = RenderList();
  return (
    <BoxAtom p={60} bg="#f1f1f1" height={1000}>
      <DropdownMolecules
        avatar={
          <BoxAtom width={60} height={60} borderRadius="100%" bg="#a0a0a0" />
        }
        title={value}
        subtitle="Subtitle"
        options={Options}
      />
    </BoxAtom>
  );
};
