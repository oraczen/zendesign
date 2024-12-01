import type { Meta, StoryObj } from "@storybook/react";
import { CustomSonner } from "@/components/atoms/sonner";
import { toast } from "sonner";
import { Button } from "@/components/atoms/button";

const meta: Meta<typeof CustomSonner> = {
  title: "Atoms/CustomSonner",
  component: CustomSonner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof CustomSonner>;

export const Default: Story = {
  render: () => (
    <div>
      <CustomSonner />
      <Button
        variant="outline"
        onClick={() => toast("This is a default toast")}
      >
        Show Toast
      </Button>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div>
      <CustomSonner />
      <Button
        variant="outline"
        onClick={() =>
          toast("Toast with description", {
            description: "This is a more detailed description of the toast.",
          })
        }
      >
        Show Toast with Description
      </Button>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div>
      <CustomSonner />
      <Button
        variant="outline"
        onClick={() =>
          toast("Confirm Action", {
            description: "Are you sure you want to proceed?",
            action: {
              label: "Confirm",
              onClick: () => console.log("Action confirmed"),
            },
            cancel: {
              label: "Cancel",
              onClick: () => console.log("Action cancelled"),
            },
          })
        }
      >
        Show Toast with Actions
      </Button>
    </div>
  ),
};
