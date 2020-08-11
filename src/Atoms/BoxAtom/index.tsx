import * as React from "react";
import styled from "styled-components";
import {
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  variant,
} from "styled-system";
import { BoxAtomType } from "./boxAtomType";

const BoxStyled: React.FunctionComponent<BoxAtomType> = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  ${variant({ prop: "variant", key: "box" })};
  ${compose(
    border,
    color,
    space,
    flexbox,
    position,
    layout,
    shadow,
    typography,
    grid,
  )};
`;

export const BoxAtom: React.FunctionComponent<BoxAtomType> = React.forwardRef<
  HTMLDivElement,
  BoxAtomType
>((props, ref) => <BoxStyled ref={ref} {...props} />);

BoxAtom.displayName = "BoxAtom";

export default BoxAtom;
