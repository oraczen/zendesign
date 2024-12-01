import { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "@/components/atoms/scroll-area";
import { Separator } from "@/components/ui/separator";

const meta: Meta<typeof ScrollArea> = {
  title: "Atoms/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

const RenderScrollArea = (args: object) => (
  <ScrollArea className="h-72 w-48 rounded-md border" {...args}>
    <div className="p-4">
      <h4 className="mb-6 text-sm font-medium leading-none">Tags</h4>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i}>
          <div className="text-sm">Item {i + 1}</div>
          <Separator className="my-2" />
        </div>
      ))}
    </div>
  </ScrollArea>
);

export const Default: Story = {
  render: RenderScrollArea,
};
