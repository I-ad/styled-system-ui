import { BoxAtomType } from "../../../Atoms/BoxAtom/boxAtomType";
import { ReactNode } from "react";

export interface InputWrapperBaseType {
  floatingLabel?: string;
  wrapperProps?: BoxAtomType;
  leftIcon?: ReactNode;
  loading?: boolean;
  ClearButton?: ReactNode;
  labelBackground?: string;
  labelVariant?: string;
}

export interface InputWrapper extends InputWrapperBaseType {
  children: any;
  value?: string | number | readonly string[];
  rightIcon?: ReactNode;
  onFocus?(e: any): void;
  onBlur?(e: any): void;
}
