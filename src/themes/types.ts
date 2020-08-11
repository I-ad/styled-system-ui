import { CSSProperties } from "react";
import { ThemeType } from "..";

export interface ButtonsStyles {
  primary: CSSProperties;
  secondary: CSSProperties;
  textButton: CSSProperties;
}

interface colors {
  primaryFirst: string;
  secondaryFirst?: string;
  backgroundBody: string;
  backgroundSecond: string;
  textFirst: string;
  textSecond: string;
  textThird: string;
  iconsFirst: string;
  iconsSecond: string;
  borderFirst: string;
  borderSecond: string;
  success: string;
  warning: string;
  danger: string;
  disable: string;
  divider: string;
  focus: string;
  unchecked: string;
  checked: string;
}

export type ITheme = ThemeType<colors>;
