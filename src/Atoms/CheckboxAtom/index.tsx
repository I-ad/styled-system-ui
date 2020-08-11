import * as React from "react";
import styled from "styled-components";
import { CheckboxAtomType } from "./checkboxAtomType";
import { BoxAtom } from "../BoxAtom";
import { IconAtom } from "../IconAtom";
import { CheckedHolder, UncheckedHolder } from "../common/CheckHolder";

const CheckboxStyled: React.FunctionComponent<CheckboxAtomType> = styled.input`
  appearance: none;
  position: absolute;
  opacity: 1;
  width: 24px;
  height: 24px;
  overflow: hidden;
  margin: 0;
`;

const CheckboxAtom: React.FunctionComponent<CheckboxAtomType> = React.forwardRef<
  HTMLInputElement,
  CheckboxAtomType
>(({ indeterminate, ...props }: CheckboxAtomType, ref) => {
  if (indeterminate) {
    return <IconAtom name="CheckboxIndeterminate" color="checked.active" />;
  }
  return (
    <BoxAtom width={24} height={24} display="inline-block">
      <CheckboxStyled ref={ref} {...props} type="checkbox" />
      <CheckedHolder aria-hidden="true">
        <IconAtom color="checked" name="CheckboxChecked" />
      </CheckedHolder>
      <UncheckedHolder>
        <IconAtom color="unchecked" name="CheckboxUnchecked" />
      </UncheckedHolder>
    </BoxAtom>
  );
});

CheckboxAtom.displayName = "CheckboxAtom";

export default CheckboxAtom;
