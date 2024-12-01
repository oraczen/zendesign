import type { Meta, StoryObj } from "@storybook/react"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
} from "@/components/atoms/drawer"
import { Button } from "@/components/atoms/button"

const meta: Meta<typeof Drawer> = {
  title: "Atoms/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    shouldScaleBackground: {
      control: 'boolean',
      defaultValue: true,
      description: 'Controls whether the background scales when drawer opens'
    }
  }
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>
            Toggle the scaling effect using the controls below.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Main content goes here.</p>
        </div>
        <DrawerFooter>
          <Button>Save changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  args: {
    shouldScaleBackground: true,
  }
}

export const WithoutScaleBackground: Story = {
  render: () => (
    <Drawer shouldScaleBackground={false}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer (No Scale)</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>No Background Scale</DrawerTitle>
          <DrawerDescription>
            This drawer doesn&apos;t scale the background when opening.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Drawer content goes here.</p>
        </div>
        <DrawerFooter>
          <Button>Save changes</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}
