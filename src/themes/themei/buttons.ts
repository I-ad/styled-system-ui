import { dayColors } from "./dayTheme";
import styleGuide from "./styleGuide";

export default (colors: typeof dayColors): any => ({
  primary: {
    backgroundColor: colors.primaryFirst,
    height: styleGuide.sizes.medium,
    color: colors.textSecond,
    fontsize: styleGuide.fontSizes[1],
    fontWeight: styleGuide.fontWeights.bold,
    outline: "none",
    "&:hover": {
      backgroundColor: colors.primaryFirstHover,
    },
    "&:active": {
      backgroundColor: colors.primaryFirstActive,
    },
  },
  secondary: {
    backgroundColor: "transparent",
    border: styleGuide.borders[1],
    borderColor: colors.primaryFirst,
    borderRadius: styleGuide.radii[1],
    color: colors.primaryFirst,
    outline: "none",
    "&:hover": {
      backgroundColor: colors.backgroundSecond,
    },
    "&:active": {
      backgroundColor: colors.backgroundThird,
    },
  },
});
