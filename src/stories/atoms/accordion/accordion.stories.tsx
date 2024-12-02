import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion";

const meta = {
  title: "Atoms/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Accordion component allows users to toggle the visibility of content sections. It supports single or multiple item expansion and can be customized with various props.",
      },
    },
  },
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "Choose the type of accordion behavior.",
    },
    className: {
      control: "text",
    },
    collapsible: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    defaultValue: {
      control: "select",
      options: ["item-1", "item-2", undefined],
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>Content for item 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>Content for item 2.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    className: "AccordionRoot",
    type: "single",
    defaultValue: undefined,
    collapsible: true,
    disabled: false,
  },
};
