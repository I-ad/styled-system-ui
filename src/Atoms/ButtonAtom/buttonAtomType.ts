import * as React from "react";
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";
import { Omit } from "../../types/common";

interface BaseProps extends React.RefAttributes<HTMLButtonElement> {
  variant?: string;
}

interface IStyled
  extends BaseProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {}

export interface ButtonAtomType
  extends IStyled,
    Omit<React.HTMLProps<HTMLButtonElement>, keyof IStyled> {}
