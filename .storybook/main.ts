const config = {
  stories: ["../src/{app,components}/**/*.stories.{ts,tsx}", "../src/**/*.mdx"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
  ],

  staticDirs: ["../public"],
  framework: "@storybook/nextjs",

  docs: {},

  typescript: {
    check: true,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      tsconfigPath: "../tsconfig.json",
    },
  },
};

export default config;
