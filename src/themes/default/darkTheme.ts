import { ITheme } from "../types";
import themeGenerate from "./themeGenerate";

const darkColors: ITheme["colors"] = {
  primaryFirst: "#FFF",
  backgroundBody: "#000",
  backgroundSecond: "#FFF",
  textFirst: "#FFF",
  textSecond: "#B2B2B2",
  textThird: "#000",
  iconsFirst: "#FFF",
  iconsSecond: "#000",
  borderFirst: "#333",
  borderSecond: "#D9D9D9",
  success: "#52D95D",
  warning: "#f0A03D",
  danger: "#E83A3A",
  disable: "#C2C2C2",
  divider: "#E5E5E5",
  focus: "#FFF",
  unchecked: "#999",
  checked: "#FFF",
};

export default themeGenerate(darkColors, "darkTheme");
