import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";

// Changing the theme to light and changed the title
addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: "K O S M O S  |  D S",
  },
});
