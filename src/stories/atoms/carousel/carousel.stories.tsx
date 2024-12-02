import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/atoms/carousel";

const meta: Meta<typeof Carousel> = {
  title: "Atoms/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select", options: ["horizontal", "vertical"] },
      defaultValue: "horizontal",
      description: "Orientation of the carousel",
    },
    opts: {
      control: "object",
      description: "Options for the Embla carousel",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the carousel container",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const Template: Story = {
    render: (args: React.ComponentProps<typeof Carousel>) => (
        <Carousel {...args}>
          <CarouselContent>
            <CarouselItem className="w-20">
              <div className="p-1 bg-red-500 h-40 w-20 flex items-center justify-center">
              Slide 1
              </div>
            </CarouselItem>
            <CarouselItem className="w-2">
              <div className="p-1 bg-blue-500">
                Slide 2
              </div>
            </CarouselItem>
            <CarouselItem className="w-2">
              <div className="p-1">
              Slide 3
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    ),
  };

export const Default: Story = {
  ...Template,
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  ...Template,
  args: {
    orientation: "vertical",
  },
};
