import { ITheme } from "../types";
import themeGenerate from "./themeGenerate";

const lightColors: ITheme["colors"] = {
  primaryFirst: "#000",
  backgroundBody: "#FFF",
  backgroundSecond: "#000",
  textFirst: "#000",
  textSecond: "#B2B2B2",
  textThird: "#FFF",
  iconsFirst: "#000",
  iconsSecond: "#FFF",
  borderFirst: "#999",
  borderSecond: "#D9D9D9",
  success: "#52D95D",
  warning: "#f0A03D",
  danger: "#E83A3A",
  disable: "#C2C2C2",
  divider: "#E5E5E5",
  focus: "#000",
  unchecked: "#999",
  checked: "#000",
};

export default themeGenerate(lightColors, "lightTheme");
