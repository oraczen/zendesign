import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/atoms/avatar";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "An image element with a fallback for representing the user.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;


export const Default: Story = {
  render: (args: object) => (
    <Avatar {...args}>
      <AvatarImage/>
      <AvatarFallback>SB</AvatarFallback>
    </Avatar>
  ),
};

export const AvatarWithImage: Story = {
    render: (args: object) => (
      <Avatar {...args}>
        <AvatarImage src='https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop'/>
        <AvatarFallback>SB</AvatarFallback>
      </Avatar>
    ),
};

