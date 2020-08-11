import { InputAtomType } from "../../Atoms/InputAtom/inputAtomType";
import { InputWrapperBaseType } from "../common/InputsWrapper/input.wrapper.type";
import { ReactNode } from "react";

export interface InputMoleculesType
  extends InputAtomType,
    InputWrapperBaseType {
  rightIcon?: ReactNode;
}
