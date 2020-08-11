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

interface IStyled
  extends React.RefAttributes<HTMLSelectElement>,
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps {
  variant?: ResponsiveValue<string>;
  variantStatus?: ResponsiveValue<string>;
  hasError?: boolean;
}

export interface SelectAtomType
  extends IStyled,
    Omit<React.HTMLProps<HTMLSelectElement>, keyof IStyled> {}
