import { boolean, text } from "@storybook/addon-knobs";
import * as React from "react";
import { useState } from "react";
import BoxAtom from "../../Atoms/BoxAtom";
import { IconAtom, IconButtonAtom } from "../../Atoms/IconAtom";
import InputMolecules from "./index";

export default {
  title: "Molecules/Input",
};

export const Input = (): any => {
  const [value, setValue] = useState("Value");
  const [type, setType] = useState("text");
  const toggleType = () => setType((x) => (x === "text" ? "password" : "text"));
  const onChange = (e: any) => setValue(e.target.value);
  const onClear = () => setValue("");
  const clearButton = (
    <IconButtonAtom
      name="MiniCloseIcon"
      color="iconFirst"
      buttonProps={{
        bg: "backgroundSecond",
        onClick: onClear,
      }}
    />
  );

  return (
    <BoxAtom bg="backgroundBody" p={60}>
      <InputMolecules
        value={value}
        onChange={onChange}
        loading={boolean("Loading", false)}
        ClearButton={clearButton}
        leftIcon={<IconAtom name="ViewIcon" />}
        errorMessage={text("Error Message", "this Field is Required")}
        helpMessage={text("Hemp Message", "Help Text Here")}
        rightIcon={
          <IconButtonAtom
            name={type === "text" ? "ViewIcon" : "UnViewedIcon"}
            buttonProps={{ onClick: toggleType }}
          />
        }
        floatingLabelProps={{
          label: "Label",
        }}
      />
    </BoxAtom>
  );
};

export const InputWithSuggestions = (): any => {
  const [value, setValue] = useState("Value");
  const [type, setType] = useState("text");
  const toggleType = () => setType((x) => (x === "text" ? "password" : "text"));
  const onChange = (e: any) => setValue(e.target.value);
  const onClear = () => setValue("");
  const clearButton = (
    <IconButtonAtom
      name="MiniCloseIcon"
      color="iconFirst"
      buttonProps={{
        bg: "backgroundSecond",
        onClick: onClear,
      }}
    />
  );
  const items = ["1", "2", "3", "4", "5"];
  const RenderList = () => {
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
  const suggestion = RenderList();
  return (
    <BoxAtom bg="backgroundBody" p={60}>
      <InputMolecules
        type={type}
        value={value}
        onChange={onChange}
        loading={boolean("Loading", false)}
        ClearButton={clearButton}
        leftIcon={<IconAtom name="ViewIcon" />}
        suggestions={suggestion}
        errorMessage="this Field is Required"
        helpMessage="Help Text Here"
        floatingLabelProps={{
          label: "Label",
        }}
      />
    </BoxAtom>
  );
};
