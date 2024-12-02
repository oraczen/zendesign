import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@/components/atoms/calendar";

const meta: Meta<typeof Calendar> = {
  title: "Atoms/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    showOutsideDays: {
      control: 'boolean',
      defaultValue: true,
      description: 'Show days from previous/next months'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      description: 'Disable calendar selection'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: (args) => (
    <Calendar {...args} className="w-fit rounded-md border" />
  ),
};


