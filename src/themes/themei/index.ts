import { dayColors } from "./dayTheme";
import darkLight from "./nightTheme";
import themeGenerate from "./themeGenerate";

const dayTheme = themeGenerate(dayColors, "lightTheme");
const nightTheme = themeGenerate(darkLight, "darkLight");

export { dayTheme, nightTheme };
