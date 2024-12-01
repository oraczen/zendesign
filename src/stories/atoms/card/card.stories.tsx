import React from 'react';
import { Meta, StoryObj,} from '@storybook/react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter} from '@/components/atoms/card';


const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: "Displays a card with header, content, and footer."
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;


export const Default: Story = {
  render:(args)=>(
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>Card Content</CardContent>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  )
};
