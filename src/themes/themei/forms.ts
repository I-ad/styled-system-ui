import { dayColors } from "./dayTheme";
import styleGuide from "./styleGuide";

export default (colors: typeof dayColors): any => ({
  inputStyle: {
    border: styleGuide.borders[1],
    borderColor: colors.borderFirst,
    height: styleGuide.sizes.medium,
    borderRadius: styleGuide.radii[1],
    backgroundColor: "transparent",
    color: colors.textFirst,
  },
  inputFocus: {
    borderColor: colors.borderFirstFocus,
  },
  inputError: {
    borderColor: colors.danger,
  },
  labelBar: {
    borderTop: "2px solid",
    borderColor: colors.backgroundBody,
  },
  label: {
    color: colors.textFirst,
  },
  errorMessage: {
    marginTop: styleGuide.space[1],
    color: colors.danger,
    fontSize: styleGuide.fontSizes[0],
  },
  helpMessage: {
    marginTop: styleGuide.space[1],
    color: colors.textFirst,
    fontSize: 12,
  },
});
