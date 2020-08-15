import { themeGet } from "@styled-system/theme-get";
import * as React from "react";
import { ThemeContext } from "styled-components";
import { BoxAtom } from "../BoxAtom";
import ButtonAtom from "../ButtonAtom";
import IconsBucket from "./IconsBucket";
import {
  IconAtomType,
  IconButtonAtomType,
  IconWrapperAtomType,
} from "./IconType";

export { IconsBucket };

const useThemeColors = (color?: string): string => {
  const theme = React.useContext(ThemeContext);
  return themeGet(`colors.${color}`, "#000")({ theme });
};

export const IconAtom: React.FC<IconAtomType> = ({
  name,
  color = "iconFirst",
  width = 24,
}: IconAtomType) => {
  const iconColor = useThemeColors(color);
  const Icon = IconsBucket.getByName(name);
  if (!Icon || !name) {
    return null;
  }
  return <Icon color={iconColor || color} width={width} />;
};
IconAtom.displayName = "IconAtom";

export const IconWrapperAtom: React.FC<IconWrapperAtomType> = ({
  name,
  color = "iconFirst",
  width = 24,
  wrapperProps,
}: IconWrapperAtomType) => {
  const iconColor = useThemeColors(color);
  const Icon = IconsBucket.getByName(name);
  if (!Icon || !name) {
    return null;
  }
  return (
    <BoxAtom
      borderRadius="4"
      {...wrapperProps}
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
    >
      <Icon color={iconColor || color} width={width} />
    </BoxAtom>
  );
};

IconWrapperAtom.displayName = "IconWrapperAtom";

export const IconButtonAtom: React.FunctionComponent<IconButtonAtomType> = ({
  name,
  color = "iconFirst",
  width = 24,
  buttonProps,
}: IconButtonAtomType) => {
  const iconColor = useThemeColors(color);
  const Icon = IconsBucket.getByName(name);
  if (!Icon || !name) {
    return null;
  }
  const onMouseDown = (e: any) => {
    e.preventDefault();
  };
  return (
    <ButtonAtom
      borderRadius="100%"
      bg="none"
      {...buttonProps}
      tabIndex={-1}
      onMouseDown={onMouseDown}
    >
      <Icon color={iconColor || color} width={width} />
    </ButtonAtom>
  );
};

IconButtonAtom.displayName = "IconButtonAtom";
