import * as React from "react";
import {
  AlignSelfProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  FlexProps,
  FontSizeProps,
  GridProps,
  LayoutProps,
  OrderProps,
  PositionProps,
  ResponsiveValue,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";
import { Omit } from "../../types/common";

interface IBase extends React.RefAttributes<HTMLDivElement> {
  variant?: ResponsiveValue<string>;
}

interface IStyled
  extends IBase,
    SpaceProps,
    LayoutProps,
    FontSizeProps,
    ColorProps,
    FlexProps,
    OrderProps,
    SpaceProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    TypographyProps,
    FlexboxProps,
    GridProps,
    AlignSelfProps {}

export interface BoxAtomType
  extends IStyled,
    Omit<React.HTMLProps<HTMLDivElement>, keyof IStyled> {}
