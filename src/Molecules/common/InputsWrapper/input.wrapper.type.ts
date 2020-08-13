import { ReactNode } from "react";

export interface InputWrapperBaseType {
  leftIcon?: ReactNode;
  loading?: boolean;
  ClearButton?: ReactNode;
  floatingLabelProps?: {
    label: string;
    barWidth?: number;
    variant?: string;
    barBackground?: string;
  };
}

export interface InputWrapper extends InputWrapperBaseType {
  children: any;
  value?: string | number | readonly string[];
  rightIcon?: ReactNode;
  onFocus?(e: any): void;
  onBlur?(e: any): void;
}
