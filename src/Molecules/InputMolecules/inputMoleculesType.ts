import { InputAtomType } from "../../Atoms/InputAtom/inputAtomType";
import { InputWrapperBaseType } from "../common/InputsWrapper/input.wrapper.type";
import { ReactNode } from "react";
import { SpaceProps } from "styled-system";
import { Omit } from "../../types/common";

export interface InputMoleculesType
  extends InputWrapperBaseType,
    Omit<InputAtomType, keyof SpaceProps> {
  rightIcon?: ReactNode;
}
