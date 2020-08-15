import React from "react";
import InputAtom from "../../Atoms/InputAtom";
import InputsWrapper from "../common/InputsWrapper";
import { InputMoleculesType } from "./inputMoleculesType";

const InputMolecules: React.FC<InputMoleculesType> = ({
  leftIcon,
  rightIcon,
  loading,
  ClearButton,
  floatingLabelProps,
  errorMessage,
  helpMessage,
  value,
  suggestions,
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
      errorMessage={errorMessage}
      helpMessage={helpMessage}
      suggestions={suggestions}
    >
      <InputAtom
        data-testid="input-molecules-test-id"
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
