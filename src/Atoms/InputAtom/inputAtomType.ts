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
} from "styled-system";
import { Omit } from "../../types/common";

interface Base extends React.RefAttributes<HTMLInputElement> {
  variant?: ResponsiveValue<string>;
  variantStatus?: ResponsiveValue<string>;
  hasError?: boolean;
}

interface IStyled
  extends BorderProps,
    Base,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps {}

export interface InputAtomType
  extends IStyled,
    Omit<React.HTMLProps<HTMLInputElement>, keyof IStyled> {
  hasError?: boolean;
}
