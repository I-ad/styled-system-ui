import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { addParameters } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { lightTheme, airbnbTheme, darkTheme } from "../src/themes";

const themes = [lightTheme, darkTheme, airbnbTheme];

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(withThemesProvider(themes));
addParameters({
  docs: {
    inlineStories: false,
  },
});
