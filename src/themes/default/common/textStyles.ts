import { ITheme } from "../../types";
import Base from "./base";

const textStyles = (Colors: ITheme["colors"]): any => {
  const boldStyle = {
    fontFamily: Base.fonts.bold,
    fontWeight: Base.fontWeights.bold,
    color: Colors.textFirst,
  };
  return {
    h1: {
      ...boldStyle,
      fontSize: Base.fontSizes[6],
      lineHeight: Base.lineHeights[5],
    },
    h2: {
      ...boldStyle,
      fontSize: Base.fontSizes[5],
      lineHeight: Base.lineHeights[4],
    },
    h3: {
      ...boldStyle,
      fontSize: Base.fontSizes[4],
      lineHeight: Base.lineHeights[3],
    },
    h4: {
      ...boldStyle,
      fontSize: Base.fontSizes[3],
      lineHeight: Base.lineHeights[2],
    },
    h5: {
      ...boldStyle,
      fontSize: Base.fontSizes[2],
      lineHeight: Base.lineHeights[1],
    },
    h6: {
      ...boldStyle,
      fontSize: Base.fontSizes[1],
      lineHeight: Base.lineHeights[1],
    },
    label: {
      color: Colors.textFirst,
      fontSize: Base.fontSizes[1],
      fontWeight: Base.fontWeights.normal,
      fontFamily: Base.fonts.normal,
    },
    errorMessage: {
      fontSize: Base.fontSizes[0],
      fontWeight: Base.fontWeights.normal,
      fontFamily: Base.fonts.normal,
      color: Colors.danger,
    },
  };
};

export default textStyles;
