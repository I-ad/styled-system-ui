import * as React from "react";
import styled from "styled-components";
import {
  color,
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
import { TextAtomType } from "./textAtomType";

const TextAtom: React.FunctionComponent<TextAtomType> = styled.p`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  ${({ themeKey = "text" }: TextAtomType) =>
    variant({ prop: "variant", key: themeKey })};
  ${compose(
    textStyle,
    color,
    space,
    flexbox,
    position,
    shadow,
    typography,
    layout,
  )};
`;

TextAtom.displayName = "TextAtom";

export default TextAtom;
