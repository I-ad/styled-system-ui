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
  appearance: none;
  border: 0 solid;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  ${variant({ prop: "variant", key: "forms" })};
  ${compose(border, color, space, layout, flexbox, position, shadow)};
  outline: none;
`;
const SelectAtom: React.FunctionComponent<SelectAtomType> = React.forwardRef<
  HTMLSelectElement,
  SelectAtomType
>((props, ref) => <SelectStyled ref={ref} {...props} />);

SelectAtom.displayName = "SelectAtom";

export default React.memo(SelectAtom);
