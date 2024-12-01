import type { Meta, StoryObj } from "@storybook/react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/atoms/hoverCard"

const meta: Meta<typeof HoverCard> = {
  title: "Atoms/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof HoverCard>

// Template for reusability
const HoverCardTemplate: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer underline decoration-dotted">
          Hover over me
        </span>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">@username</h4>
          <p className="text-sm">
            This is an example hover card content. You can put any content here.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

// Stories
export const Default: Story = {
  ...HoverCardTemplate,
}


