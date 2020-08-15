import buttonsStyled from "./buttons";
import { dayColors } from "./dayTheme";
import dropdownStyle from "./dropdownStyle";
import forms from "./forms";
import styleGuide from "./styleGuide";
const themeGenerate = (colors: typeof dayColors, name?: string): any => ({
  ...styleGuide,
  colors,
  name,
  dropdownStyle: dropdownStyle(colors),
  buttons: buttonsStyled(colors),
  forms: forms(colors),
});

export default themeGenerate;
