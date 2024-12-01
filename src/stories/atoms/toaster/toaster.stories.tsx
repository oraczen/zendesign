import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "@/components/atoms/toaster";
import { Button } from "@/components/atoms/button";
import { useToast } from "@/components/shadcn-hooks/use-toast";

const meta: Meta<typeof Toaster> = {
  title: "Atoms/Toaster",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

function ToasterDemo() {
  const { toast } = useToast();

  React.useEffect(() => {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2024 at 5:57 PM",
    });
  }, [toast]);

  return <Toaster />;
}

function DestructiveToasterDemo() {
  const { toast } = useToast();

  React.useEffect(() => {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Something went wrong. Please try again.",
    });
  }, [toast]);

  return <Toaster />;
}

function ActionToasterDemo() {
  const { toast } = useToast();

  React.useEffect(() => {
    toast({
      title: "New update available",
      description: "A new version is ready to install.",
      action: <Button>Update</Button>,
    });
  }, [toast]);

  return <Toaster />;
}

export const Default: Story = {
  render: () => <ToasterDemo />,
};

export const Destructive: Story = {
  render: () => <DestructiveToasterDemo />,
};

export const WithAction: Story = {
  render: () => <ActionToasterDemo />,
};
