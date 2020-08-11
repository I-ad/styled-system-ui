import * as React from "react";
import styled from "styled-components";
import { BoxAtom } from "../BoxAtom";
import { CheckedHolder, UncheckedHolder } from "../common/CheckHolder";
import { IconAtom } from "../IconAtom";
import { RadioAtomType } from "./radioAtomType";

const RadioStyled: React.FunctionComponent<RadioAtomType> = styled.input`
  appearance: none;
  position: absolute;
  opacity: 1;
  width: 24px;
  height: 24px;
  overflow: hidden;
  margin: 0;
`;

const RadioAtom: React.FunctionComponent<RadioAtomType> = React.forwardRef<
  HTMLInputElement,
  RadioAtomType
>((props, ref) => (
  <BoxAtom width={24} height={24} display="inline-block">
    <RadioStyled ref={ref} {...props} type="radio" />
    <CheckedHolder>
      <IconAtom name="RadioChecked" color="checked" />
    </CheckedHolder>
    <UncheckedHolder>
      <IconAtom name="RadioUnchecked" color="unchecked" />
    </UncheckedHolder>
  </BoxAtom>
));

RadioAtom.displayName = "RadioAtom";
export default RadioAtom;
