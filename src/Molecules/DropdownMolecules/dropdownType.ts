import { ReactNode } from "react";

interface TitleType {
  text: string;
  variant?: string;
}

export interface DropdownMoleculesType {
  avatar?: ReactNode;
  title: TitleType;
  subtitle?: TitleType;
  suggestionsList: ReactNode;
}
