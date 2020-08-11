import React from "react";
import InputsWrapper from "../common/InputsWrapper";
import InputAtom from "../../Atoms/InputAtom";
import { InputMoleculesType } from "./input.molecules.type";

const InputMolecules: React.FC<InputMoleculesType> = ({
  floatingLabel,
  wrapperProps,
  leftIcon,
  rightIcon,
  loading,
  ClearButton,
  value,
  labelBackground,
  ...props
}: InputMoleculesType) => {
  return (
    <InputsWrapper
      value={value}
      floatingLabel={floatingLabel}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      loading={loading}
      wrapperProps={wrapperProps}
      ClearButton={ClearButton}
      labelBackground={labelBackground}
    >
      <InputAtom {...props} value={value} width="100%" />
    </InputsWrapper>
  );
};

export default InputMolecules;
