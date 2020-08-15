import * as React from "react";
import SelectMolecules from "./index";
import BoxAtom from "../../Atoms/BoxAtom";
import { useState } from "react";
import { IconAtom } from "../../Atoms/IconAtom";
export default {
  title: "Molecules/Select",
};

export const Select: React.FC = () => {
  const [value, setValue] = useState("");
  const onChange = (e: any) => setValue(e.target.value);
  return (
    <BoxAtom bg="backgrounds.0.color" p={60}>
      <SelectMolecules
        floatingLabelProps={{
          label: "Select Label",
        }}
        variant="input"
        value={value}
        onChange={onChange}
        leftIcon={<IconAtom name="ViewIcon" />}
      >
        <option />
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </SelectMolecules>
    </BoxAtom>
  );
};
