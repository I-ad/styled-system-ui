import { dayColors } from "./dayTheme";
import styleGuide from "./styleGuide";

export default (colors: typeof dayColors): any => ({
  dropdown: {
    background: colors.backgroundFirst,
    padding: 20,
    borderRadius: 4,
    outline: "none",
  },
  dropdownOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    fontSize: styleGuide.sizes[1],
    color: colors.textFirst,
  },
  subtitle: {
    fontSize: styleGuide.fontSizes[0],
    color: colors.textFirst,
  },
  dropdownOptionsWrapper: {
    backgroundColor: colors.backgroundFirst,
  },
  itemList: {
    cursor: "pointer",
    height: styleGuide.sizes.medium,
    borderBottom: styleGuide.borders[1],
    borderColor: colors.divider,
    backgroundColor: colors.backgroundFirst,
    display: "flex",
    alignItems: "center",
    padding: `0 ${styleGuide.space[2]}px`,
    color: colors.textFirst,
    "&:hover": {
      backgroundColor: colors.backgroundSecond,
    },
    "&:last-child": {
      borderBottom: 0,
    },
  },
});
