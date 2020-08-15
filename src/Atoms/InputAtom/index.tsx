import * as React from "react";
import styled from "styled-components";
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  variant,
} from "styled-system";
import { InputAtomType } from "./inputAtomType";

const InputStyled: React.FunctionComponent<InputAtomType> = styled.input`
  appearance: none;
  box-sizing: border-box;
  margin: 0;
  width: 300px;
  height: 50px;
  border: 1px solid #000;
  padding: 0 10px;
  background: none;
  ${({ themeKey = "forms" }: InputAtomType) =>
    variant({ prop: "variant", key: themeKey })};
  ${({ themeKey = "forms" }: InputAtomType) =>
    variant({ prop: "variantStatus", key: themeKey })};
  ${compose(border, color, space, layout, flexbox, position, shadow)};
  outline: none;
`;

const InputAtom: React.FunctionComponent<InputAtomType> = React.forwardRef<
  HTMLInputElement,
  InputAtomType
>((props, ref) => <InputStyled ref={ref} type="text" {...props} />);

InputAtom.displayName = "InputAtom";

export default React.memo(InputAtom);
