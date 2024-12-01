import type { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "@/components/atoms/aspect-ratio"

const meta: Meta<typeof AspectRatio> = {
  title: "Atoms/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Displays content within a desired ratio.",
      },
    },
  },
  args: {
    ratio: 16 / 9,
  },
  argTypes: {
    ratio: {
      control: { type: "number" },
      description: "The aspect ratio of the container",
    },
  },
}

export default meta
type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: (args) => (
    <AspectRatio {...args}>
      <div style={{ backgroundColor: "lightgray", width: "100%", height: "100%" }}>
        Content
      </div>
    </AspectRatio>
  ),
}
