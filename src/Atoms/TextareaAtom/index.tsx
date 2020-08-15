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
import { TextareaAtomType } from "./textareaAtomType";

const TextareaStyled: React.FunctionComponent<TextareaAtomType> = styled.textarea`
  appearance: none;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #000;
  padding: 0 10px;
  ${({ themeKey = "forms" }: TextareaAtomType) =>
    variant({ prop: "variant", key: themeKey })};
  ${compose(border, color, space, layout, flexbox, position, shadow)};
  outline: none;
`;

const TextareaAtom: React.FunctionComponent<TextareaAtomType> = React.forwardRef<
  HTMLTextAreaElement,
  TextareaAtomType
>((props, ref) => <TextareaStyled ref={ref} {...props} />);

TextareaAtom.displayName = "TextareaAtom";

export default React.memo(TextareaAtom);
