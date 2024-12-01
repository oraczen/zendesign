import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuShortcut,
} from "@/components/atoms/dropdown-menu";
import { Button } from "@/components/atoms/button";

const meta: Meta<typeof DropdownMenu> = {
  title: "Atoms/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

const renderDropdownMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button>Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Option 1</DropdownMenuItem>
      <DropdownMenuItem>
        Option 2<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <Button variant="ghost">More</Button>
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Option 1</DropdownMenuItem>
          <DropdownMenuItem>Option 2</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const Default: Story = {
  render: renderDropdownMenu,
};
