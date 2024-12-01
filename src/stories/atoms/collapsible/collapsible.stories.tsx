import { Meta, StoryObj } from "@storybook/react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/atoms/collapsible";
import { Button } from "@/components/atoms/button";
import { CaretSortIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Collapsible> = {
  title: "Atoms/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: "An interactive component which expands/collapses a panel."
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => (
    <Collapsible>
    <div className="flex items-center justify-center gap-2">
        <h4>This is a collapsible</h4>
    <CollapsibleTrigger>
        <Button variant="default" size="sm">
          <CaretSortIcon className="h-4 w-4" />
          <span className="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
    </div>
      
      <CollapsibleContent className="flex items-center justify-center gap-2">
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
  ),
};
