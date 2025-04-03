import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    options: {
      storySort: {
        order: ["Welcome", "Example", "Atoms", "Molecules", "Organisms", "Hooks", "*"],
      },
    },
  },
  globalTypes: {
    darkMode: {
      defaultValue: false,
    },
  },
};

export default preview;
