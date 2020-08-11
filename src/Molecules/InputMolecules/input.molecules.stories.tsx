import { boolean } from "@storybook/addon-knobs";
import * as React from "react";
import InputMolecules from "./index";
import BoxAtom from "../../Atoms/BoxAtom";
import { useState } from "react";
import { IconAtom, IconButtonAtom } from "../../Atoms/IconAtom";

export default {
  title: "Molecules/Input",
};

export const Input = () => {
  const [value, setValue] = useState("Value");
  const [type, setType] = useState("text");
  const toggleType = () => setType((x) => (x === "text" ? "password" : "text"));
  const onChange = (e: any) => setValue(e.target.value);
  const onClear = () => setValue("");
  const clearButton = (
    <IconButtonAtom
      name="MiniCloseIcon"
      color="backgroundBody"
      buttonProps={{
        bg: "backgroundSecond",
        onClick: onClear,
      }}
    />
  );
  return (
    <BoxAtom bg="backgroundBody" p={60}>
      <InputMolecules
        type={type}
        floatingLabel="Label"
        variant="input"
        value={value}
        onChange={onChange}
        loading={boolean("Loading", false)}
        ClearButton={clearButton}
        leftIcon={<IconAtom name="ViewIcon" />}
        rightIcon={
          <IconButtonAtom
            name={type === "text" ? "ViewIcon" : "UnViewedIcon"}
            buttonProps={{ onClick: toggleType }}
          />
        }
      />
    </BoxAtom>
  );
};
