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
import { SelectAtomType } from "./selectAtomType";

const SelectStyled: React.FunctionComponent<SelectAtomType> = styled.select`
  box-sizing: border-box;
  margin: 0;
  width: 300px;
  height: 50px;
  border: 1px solid #000;
  padding: 0 10px;
  ${({ themeKey = "forms" }: SelectAtomType) =>
    variant({ prop: "variant", key: themeKey })};
  ${compose(border, color, space, layout, flexbox, position, shadow)};
  outline: none;
`;
const SelectAtom: React.FunctionComponent<SelectAtomType> = React.forwardRef<
  HTMLSelectElement,
  SelectAtomType
>((props, ref) => <SelectStyled ref={ref} {...props} />);

SelectAtom.displayName = "SelectAtom";

export default React.memo(SelectAtom);
