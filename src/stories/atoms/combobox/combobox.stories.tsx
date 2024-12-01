import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { Combobox, type ComboboxOption } from "@/components/atoms/combobox"

// Sample datasets
const frameworks: ComboboxOption[] = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
]


const meta: Meta<typeof Combobox> = {
  title: "Atoms/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
        description: {
          component: "Autocomplete input and command palette with a list of suggestions. The Combobox is built using a composition of the Popover and the Command components.",
        },
      },
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
  // Define default args
  args: {
    placeholder: "Select option...",
    searchPlaceholder: "Search...",
    emptyMessage: "No option found.",
    options: frameworks,
  },
  // Define controls
  argTypes: {
    options: {
      control: 'object',
      options: ['frameworks', 'countries'],
      mapping: {
        frameworks,
      },
    },
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    searchPlaceholder: {
      control: 'text',
    },
    emptyMessage: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    onChange: { action: 'changed' }
  }
}

export default meta
type Story = StoryObj<typeof Combobox>

// Interactive Template
function ComboboxWithState(args: React.ComponentProps<typeof Combobox>) {
  const [value, setValue] = useState("")

  return (
    <div className="space-y-4">
      <Combobox
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
          args.onChange?.(newValue)
        }}
      />
    </div>
  )
}

export const Default: Story = {
  render: (args) => <ComboboxWithState {...args} />,
  args: {
    options: frameworks,
    placeholder: "Select framework...",
    searchPlaceholder: "Search framework...",
    emptyMessage: "No framework found.",
  },
}

