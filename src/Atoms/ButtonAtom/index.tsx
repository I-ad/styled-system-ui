import * as React from "react";
import styled from "styled-components";
import {
  border,
  buttonStyle,
  color,
  colorStyle,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  textStyle,
  typography,
  variant,
} from "styled-system";
import { ButtonAtomType } from "./buttonAtomType";

const ButtonStyled: React.FunctionComponent<ButtonAtomType> = styled.button`
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  font-size: inherit;
  border: 0;
  cursor: pointer;
  padding: 0;
  background: none;
  box-sizing: border-box;
  pointer-events: auto;
  ${variant({ prop: "variant", key: "buttons" })};
  ${compose(
    buttonStyle,
    colorStyle,
    textStyle,
    color,
    space,
    layout,
    border,
    flexbox,
    position,
    shadow,
    typography,
  )};
  svg {
    vertical-align: middle;
  }
`;

const ButtonAtom: React.FunctionComponent<ButtonAtomType> = React.forwardRef<
  HTMLButtonElement,
  ButtonAtomType
>((props, ref) => <ButtonStyled ref={ref} {...props} />);
ButtonAtom.displayName = "ButtonAtom";

export default ButtonAtom;
