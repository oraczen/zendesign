import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/atoms/alertDialog";
import { Button } from "@/components/atoms/button";

const meta: Meta<typeof AlertDialog> = {
  title: 'Atoms/AlertDialog',
  component: AlertDialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "The Alert Dialog component is used to interrupts the user with important content and expects a response.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: (args: object) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger>
      <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Alert Dialog Title</AlertDialogTitle>
          <AlertDialogDescription>Alert Dialog Description</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
