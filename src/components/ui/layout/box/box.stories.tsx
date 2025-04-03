import { type Meta, type StoryObj } from "@storybook/react";

import { Box } from "./box";

const meta: Meta = {
  title: "layout/Box",
  component: Box,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Demo = {
  args: {
    sx: { p: 2, border: "1px dashed", borderColor: "primary.main" },
  },
  render: ({ ...props }) => (
    <Box {...props} component="section">
      This is a box
    </Box>
  ),
} as Story;
