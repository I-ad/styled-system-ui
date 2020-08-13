# NOT STABLE
React web UI components built with styled-components and styled-system.
```javascript
import {ThemeProvider} from "styled-system-ui";

const theme = { ...styleGuide, ...colors, ...forms, ...buttoStyles, ...textStyles};

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

you can use your own Icons
```text
import {IconsBucket} from "styled-system-ui";

const UserIcon = ({color, width}) => {...};
IconsBucket.addIcon("UserIcon", UserIcon);
```

#### Install Dependencies
```text
yarn 
or 
npm i
```

#### Start Storybook
```text
yarn storybook 
or
npm run storybook
```
#### Test
```text
yarn test 
or
npm run test
```

