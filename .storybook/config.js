import { addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { dayTheme, nightTheme } from "../src/themes/themei";

const themes = [dayTheme, nightTheme];

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(withThemesProvider(themes));
addParameters({
  docs: {
    inlineStories: false,
  },
});
