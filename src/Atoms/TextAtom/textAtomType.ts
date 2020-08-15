import * as React from "react";
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ResponsiveValue,
  ShadowProps,
  SpaceProps,
  TextStyleProps,
  TypographyProps,
} from "styled-system";
import { Omit } from "../../types/common";

interface IStyled
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps,
    TextStyleProps {
  variant?: ResponsiveValue<string>;
  themeKey?: string;
  as?: string;
}

export interface TextAtomType
  extends IStyled,
    Omit<React.HTMLProps<HTMLHeadingElement>, keyof IStyled> {}
