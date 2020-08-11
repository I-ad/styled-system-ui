import { BoxAtomType } from "../BoxAtom/boxAtomType";
import { ButtonAtomType } from "../ButtonAtom/buttonAtomType";

export interface IconAtomType {
  name: string;
  color?: string;
  width?: number | string;
}

export interface IconWrapperAtomType extends IconAtomType {
  wrapperProps?: BoxAtomType;
}

export interface IconButtonAtomType extends IconAtomType {
  buttonProps?: ButtonAtomType;
}
