import React from "react";
import InputsWrapper from "../common/InputsWrapper";
import InputAtom from "../../Atoms/InputAtom";
import { InputMoleculesType } from "./input.molecules.type";

const InputMolecules: React.FC<InputMoleculesType> = ({
  leftIcon,
  rightIcon,
  loading,
  ClearButton,
  floatingLabelProps,
  value,
  ...props
}: InputMoleculesType) => {
  return (
    <InputsWrapper
      value={value}
      floatingLabelProps={floatingLabelProps}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      loading={loading}
      ClearButton={ClearButton}
    >
      <InputAtom
        data-testid="input-molecules-test-id"
        width={400}
        height={50}
        {...props}
        value={value}
        m={null}
        margin={null}
        mt={null}
        marginTop={null}
        mr={null}
        marginRight={null}
        mb={null}
        marginBottom={null}
        ml={null}
        marginLeft={null}
        mx={null}
        marginX={null}
        my={null}
        marginY={null}
        p={null}
        padding={null}
        pt={null}
        paddingTop={null}
        pr={null}
        paddingRight={null}
        pb={null}
        paddingBottom={null}
        pl={null}
        paddingLeft={null}
        px={null}
        paddingX={null}
        py={null}
        paddingY={null}
      />
    </InputsWrapper>
  );
};

export default InputMolecules;
