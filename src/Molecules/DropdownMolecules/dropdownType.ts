import { ReactNode } from "react";

export interface DropdownMoleculesType {
  avatar?: ReactNode;
  title: string;
  subtitle?: string;
  options: ReactNode;
  themeKey?: string;
}
