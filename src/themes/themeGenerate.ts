import base from "./common/base";
import boxStyles from "./common/boxStyles";
import buttons from "./common/buttons";
import forms from "./common/forms";
import textStyles from "./common/textStyles";
import { IColors, ThemeType } from "../types/themeType";

const themeGenerate = (colors: IColors, name?: string): ThemeType => ({
  name,
  ...base,
  colors,
  box: boxStyles(colors),
  forms: forms(colors),
  text: textStyles(colors),
  buttons: buttons(colors),
});

export default themeGenerate;
