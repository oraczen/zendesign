import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/atoms/popover";
import { Button } from "@/components/atoms/button";


const meta: Meta<typeof Popover> = {
  title: "Atoms/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

const RenderPopover = () => (
  <Popover>
    <PopoverTrigger>
      <Button variant="outline">Open</Button>
    </PopoverTrigger>
    <PopoverContent>Content goes here</PopoverContent>
  </Popover>
);

export const Default: Story = {
  render: RenderPopover,
  args: {},
};
