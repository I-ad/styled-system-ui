import { ITheme } from "../types";
import themeGenerate from "./themeGenerate";

const lightColors: ITheme["colors"] = {
  primaryFirst: "#FF5A5F",
  secondaryFirst: "#00A699",
  backgroundBody: "#FFF",
  backgroundSecond: "#000",
  textFirst: "#484848",
  textSecond: "#767676",
  textThird: "#FFF",
  iconsFirst: "#000",
  iconsSecond: "#FFF",
  borderFirst: "#767676",
  borderSecond: "#D9D9D9",
  success: "#52D95D",
  warning: "#f0A03D",
  danger: "#C43D20",
  disable: "#C2C2C2",
  divider: "#E5E5E5",
  focus: "#006C70",
  unchecked: "#999",
  checked: "#006C70",
};

export default themeGenerate(lightColors, "airbnbTheme");
