import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/atoms/resizable";

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Atoms/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    direction: "horizontal",
  },
  argTypes: {
    direction: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "The direction of resizing",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: "400px", border: "1px solid #ccc" }}>{Story()}</div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ResizablePanelGroup>;

const RenderResizable = ({
  direction,
}: {
  direction: "horizontal" | "vertical";
}) => (
  <ResizablePanelGroup direction={direction}>
    <ResizablePanel defaultSize={25}>
      <div className="flex h-full items-center justify-center bg-muted p-6">
        <span className="font-semibold">Panel 1</span>
      </div>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize={50}>
      <div className="flex h-full items-center justify-center bg-muted p-6">
        <span className="font-semibold">Panel 2</span>
      </div>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize={25}>
      <div className="flex h-full items-center justify-center bg-muted p-6">
        <span className="font-semibold">Panel 3</span>
      </div>
    </ResizablePanel>
  </ResizablePanelGroup>
);

export const Default: Story = {
  render: RenderResizable,
  args: {
    direction: "horizontal",
  },
};

export const Vertical: Story = {
  render: RenderResizable,
  args: {
    direction: "vertical",
  },
};
