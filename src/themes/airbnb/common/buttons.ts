import { ITheme } from "../../types";
import Base from "./base";

const buttons = (Colors: ITheme["colors"]): any => {
  const common = {
    borderRadius: Base.radii[3],
    fontSize: Base.fontSizes[1],
    fontFamily: Base.fonts.bold,
    fontWeight: Base.fontWeights.bold,
    height: Base.sizes.medium,
  };
  return {
    primary: {
      ...common,
      backgroundColor: Colors.primaryFirst,
      color: Colors.textThird,
      minWidth: 300,
    },
    secondary: {
      ...common,
      backgroundColor: Colors.backgroundBody,
      color: Colors.primaryFirst,
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
