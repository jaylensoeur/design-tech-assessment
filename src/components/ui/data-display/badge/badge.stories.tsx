import { type Meta, type StoryObj } from "@storybook/react";

import { Badge } from "./badge";

import { BadgeIcon, Check } from "lucide-react";

const meta: Meta = {
  title: "data-display/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Badge is a component that displays status or information.",
      },
    },
    // Only including the controls that are relevant to the component
    controls: {
      include: ["variant", "children", "size", "isSolid", "icon", "aria-label", "role"],
    },
  },
  argTypes: {
    variant: {
      description: "The variant of the badge.",
      control: { type: "select" },
      options: ["default", "success", "information", "warning", "danger", "new"],
    },
    children: {
      description: "The content to display inside the badge.",
      control: { type: "text" },
      defaultValue: "Badge",
    },
    isSolid: {
      description: "Whether the badge is solid or not.",
      control: { type: "boolean" },
      defaultValue: false,
    },
    size: {
      description: "The size of the badge.",
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    icon: {
      description: "The icon to display inside the badge.",
      control: { type: "select" },
      options: ["No Icon", "With Icon"],
      defaultValue: "No Icon",
    },
    "aria-label": {
      description: "The aria-label of the badge. If not specified, the badge label will be used.",
      control: { type: "text" },
    },
    role: {
      description: "The role of the badge. If not specified, the badge will be used as a status.",
      control: { type: "select" },
      options: ["status", "note", "tag"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  args: {
    variant: "default",
    children: "Badge",
    icon: "No Icon" as any,
    isSolid: false,
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        story: "Basic badge component with customizable variant, content, and icon.",
      },
    },
  },
  // Rendering the badge with the icon if "With Icon" option is selected
  render: (args: any) => <Badge {...args} icon={args.icon === "With Icon" ? Check : undefined} />,
};

// Color Variants
export const AllVariants: Story = {
  parameters: {
    title: "All Color Variants",
    docs: {
      description: {
        story: "All the color variants of the badge component.",
      },
    },
    controls: {
      exclude: ["*"],
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col gap-3">
        <Badge variant="default">New Stock</Badge>
        <Badge variant="default" isSolid>
          New Stock
        </Badge>
      </div>
      <div className="flex flex-col gap-3">
        <Badge variant="information">Trending Item</Badge>
        <Badge variant="information" isSolid>
          Trending Item
        </Badge>
      </div>
      <div className="flex flex-col gap-3">
        <Badge variant="warning">Limited Stock</Badge>
        <Badge variant="warning" isSolid>
          Limited Stock
        </Badge>
      </div>
      <div className="flex flex-col gap-3">
        <Badge variant="success">Save 20%</Badge>
        <Badge variant="success" isSolid>
          Save 20%
        </Badge>
      </div>
      <div className="flex flex-col gap-3">
        <Badge variant="danger">🔥 Hot Deal</Badge>
        <Badge variant="danger" isSolid>
          🔥 Hot Deal
        </Badge>
      </div>
      <div className="flex flex-col gap-3">
        <Badge variant="new" icon={BadgeIcon}>
          New Item
        </Badge>
        <Badge variant="new" icon={BadgeIcon} isSolid>
          New Item
        </Badge>
      </div>
    </div>
  ),
};
