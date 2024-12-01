import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Toast,
  ToastProvider,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
  type ToastProps,
} from "@/components/atoms/toast";

const meta: Meta<typeof Toast> = {
  title: "Atoms/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

const renderToast = (args: ToastProps) => (
  <ToastProvider>
    <Toast {...args}>
      <ToastTitle>Toast Title</ToastTitle>
      <ToastDescription>Toast Description</ToastDescription>
      <ToastClose />
    </Toast>
    <ToastViewport />
  </ToastProvider>
);

export const Default: Story = {
  render: renderToast,
  args: {
    variant: "default",
  },
};

export const Destructive: Story = {
  render: renderToast,
  args: {
    variant: "destructive",
  },
};
