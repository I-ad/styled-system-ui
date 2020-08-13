import { ITheme } from "../../types";
import Base from "./base";

const forms = (Colors: ITheme["colors"]): any => ({
  input: {
    height: Base.sizes.large,
    background: "transparent",
    borderRadius: Base.radii[1],
    border: `1px solid ${Colors.borderFirst}`,
    paddingLeft: Base.space[3],
    paddingRight: Base.space[3],
    color: Colors.textFirst,
    fontSize: Base.fontSizes[1],
    fontWeight: Base.fontWeights.normal,
    fontFamily: Base.fonts.normal,
    "&:focus": {
      border: `2px solid ${Colors.focus}`,
    },
    "&::placeholder": {
      color: Colors.textSecond,
    },
    "&:disabled": {
      background: Colors.disable,
      cursor: "not-allowed",
    },
  },
  search: {
    height: Base.sizes.small,
    background: Colors.backgroundBody,
    borderRadius: Base.radii[2],
    border: `1px solid ${Colors.borderFirst}`,
    paddingLeft: Base.space[3],
    paddingRight: Base.space[3],
    color: Colors.textFirst,
    fontSize: Base.fontSizes[1],
    fontWeight: Base.fontWeights.normal,
    fontFamily: Base.fonts.normal,
    "&:focus": {
      border: `1px solid ${Colors.focus}`,
    },
    "&::placeholder": {
      color: Colors.textSecond,
    },
    "&:disabled": {
      background: Colors.disable,
      cursor: "not-allowed",
    },
  },
});

export default forms;
