import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/components/atoms/input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["default", "email", "file"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "default",
    placeholder: "Defult Input",
  },
};

export const FileInput: Story = {
  args: {
    type: "file",
  },
};

export const EmailInput: Story = {
  args: {
    type: "email",
    placeholder: "Email Input",
  },
};
