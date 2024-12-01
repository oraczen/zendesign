import { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/atoms/button";

const meta: Meta<typeof Sheet> = {
  title: "Atoms/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Sheet>;

const renderSheet = (args: object) => (
  <Sheet {...args}>
    <SheetTrigger>
      <Button>Open</Button>
    </SheetTrigger>
    <SheetPortal>
      <SheetOverlay />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet Description</SheetDescription>
        </SheetHeader>
        Content goes here
        <SheetClose asChild></SheetClose>
        <SheetFooter>Footer goes here</SheetFooter>
      </SheetContent>
    </SheetPortal>
  </Sheet>
);

export const Default: Story = {
  render: renderSheet,
};
