import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "@/components/atoms/radio-group";
import { Label } from "@/components/atoms/label";

const meta: Meta<typeof RadioGroup> = {
  title: "Atoms/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    defaultValue: "comfortable",
  },
  argTypes: {
    defaultValue: {
      control: "radio",
      options: ["default", "comfortable", "compact"],
      description: "The default selected value for the radio group.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue={args.defaultValue}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
  args: {
    defaultValue: "comfortable",
  },
};
