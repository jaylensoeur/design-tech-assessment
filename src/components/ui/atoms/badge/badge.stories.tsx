import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { type Meta, type StoryObj } from "@storybook/react";

import { Badge } from "./badge";

const icons = {
  checkCircle: <CheckCircleIcon />,
  error: <ErrorIcon />,
  newReleases: <NewReleasesIcon />,
  null: undefined,
};

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A flexible badge component with semantic color variants and size options.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "sale", "pre-order", "out-of-stock", "limited-edition", "online-only"],
      description: "Preset variants of the badge",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
      description: "The size of the badge, small and medium",
    },
    label: {
      control: { type: "text" },
      description: "The text content of the badge",
    },
    icon: {
      control: { type: "select" },
      options: ["checkCircle", "error", "newReleases", "null"],
      mapping: icons,
      description: "The icon to display in the badge",
    },
    className: {
      table: { disable: true },
    },
    customColor: {
      control: { type: "select" },
      options: ["halloween", "mothers-day", "christmas-red", "christmas-green", "valentines-day"],
      description: "The custom color to apply to the badge",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

// Interactive playground
const Playground: Story = {
  args: {
    label: "",
    variant: "sale",
    size: "small",
    icon: undefined,
    customColor: undefined,
  },
};

const Showcase: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ aspectRatio: "1/1", width: "350px", border: "1px dashed gray" }} />
      <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", maxWidth: "100%", width: "350px" }}>
        <Badge variant="sale" />
        <Badge icon={icons.newReleases} variant="limited-edition" />
        <Badge variant="pre-order" />
        <Badge label="7 Items left" variant="out-of-stock" />
        <Badge variant="online-only" />
      </div>
    </div>
  ),
};

export { Playground, Showcase };
