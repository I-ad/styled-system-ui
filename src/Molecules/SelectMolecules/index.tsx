import React from "react";
import { SelectMoleculesType } from "./SelectMoleculesType";
import InputsWrapper from "../common/InputsWrapper";
import SelectAtom from "../../Atoms/SelectAtom";
import { IconAtom } from "../../Atoms/IconAtom";

const SelectMolecules: React.FC<SelectMoleculesType> = ({
  floatingLabelProps,
  leftIcon,
  loading,
  ClearButton,
  value,
  ...props
}: SelectMoleculesType) => {
  const RightIcon = <IconAtom name="SelectArrowIcon" color="checked" />;
  return (
    <InputsWrapper
      floatingLabelProps={floatingLabelProps}
      value={value}
      leftIcon={leftIcon}
      loading={loading}
      ClearButton={ClearButton}
      rightIcon={RightIcon}
    >
      <SelectAtom {...props} value={value} style={{ appearance: "none" }} />
    </InputsWrapper>
  );
};

export default SelectMolecules;
