import { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@/components/atoms/toggle";

const meta: Meta<typeof Toggle> = {
  title: "Atoms/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args: object) => <Toggle {...args}>Toggle</Toggle>,
  args: {
    variant: "default",
    size: "default",
  },
};

export const Outline: Story = {
  render: (args: object) => <Toggle {...args}>Toggle</Toggle>,
  args: {
    variant: "outline",
    size: "default",
  },
};
