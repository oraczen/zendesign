import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/tabs";

const meta: Meta<typeof Tabs> = {
  title: "Atoms/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
      </TabsList>
      <TabsList>
        <TabsTrigger value="document">Document</TabsTrigger>
      </TabsList>
      <TabsList>
        <TabsTrigger value="setting">Setting</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p>Account</p>
      </TabsContent>
      <TabsContent value="document">
        <p>Document</p>
      </TabsContent>
      <TabsContent value="setting">
        <p>Setting</p>
      </TabsContent>
    </Tabs>
  ),
};