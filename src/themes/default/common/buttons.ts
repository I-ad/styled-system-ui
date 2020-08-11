import { ITheme } from "../../types";
import Base from "./base";

const buttons = (Colors: ITheme["colors"]): any => {
  const common = {
    borderRadius: Base.radii[1],
    fontSize: Base.fontSizes[1],
    fontFamily: Base.fonts.bold,
    fontWeight: Base.fontWeights.bold,
    height: Base.sizes.medium,
  };
  return {
    primary: {
      backgroundColor: Colors.primaryFirst,
      color: Colors.textThird,
      minWidth: 300,
      borderRadius: Base.radii[1],
      fontSize: Base.fontSizes[1],
      fontFamily: Base.fonts.bold,
      fontWeight: Base.fontWeights.bold,
      height: Base.sizes.medium,
      "&:hover": {
        backgroundColor: Colors.primaryFirst,
      },
      "&:active": {
        backgroundColor: Colors.primaryFirst,
      },
    },
    secondary: {
      ...common,
      backgroundColor: Colors.backgroundBody,
      color: Colors.textFirst,
      border: Base.borders[2],
      borderColor: Colors.primaryFirst,
      height: Base.sizes.medium,
      minWidth: 300,
    },
    textButton: {
      ...common,
      backgroundColor: "transparent",
      padding: Base.space[2],
      height: "auto",
      color: Colors.textFirst,
    },
  };
};

export default buttons;
