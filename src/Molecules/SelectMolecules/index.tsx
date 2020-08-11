import React from "react";
import { SelectMoleculesType } from "./SelectMoleculesType";
import InputsWrapper from "../common/InputsWrapper";
import SelectAtom from "../../Atoms/SelectAtom";
import { IconAtom } from "../../Atoms/IconAtom";

const SelectMolecules: React.FC<SelectMoleculesType> = ({
  floatingLabel,
  wrapperProps,
  leftIcon,
  loading,
  ClearButton,
  value,
  ...props
}: SelectMoleculesType) => {
  const RightIcon = <IconAtom name="SelectArrowIcon" color="checked" />;
  return (
    <InputsWrapper
      value={value}
      floatingLabel={floatingLabel}
      leftIcon={leftIcon}
      loading={loading}
      wrapperProps={wrapperProps}
      ClearButton={ClearButton}
      rightIcon={RightIcon}
    >
      <SelectAtom {...props} value={value} width="100%" />
    </InputsWrapper>
  );
};

export default SelectMolecules;
