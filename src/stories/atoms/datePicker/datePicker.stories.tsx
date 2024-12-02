import React from "react";
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import { DatePicker } from "@/components/atoms/datePicker"

const meta: Meta<typeof DatePicker> = {
  title: "Atoms/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    layout: "top",
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
    placeholder: "Pick a date",
    disabled: false,
  },
  // Define controls
  argTypes: {
    value: {
      control: 'date',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
    onChange: { action: 'changed' }
  }
}

export default meta
type Story = StoryObj<typeof DatePicker>

// Interactive Template
function DatePickerWithState(args: React.ComponentProps<typeof DatePicker>) {
  const [date, setDate] = useState<Date>()

  return (
    <div className="space-y-2">
      <DatePicker
        {...args}
        value={date}
        onChange={(newDate) => {
          setDate(newDate)
          args.onChange?.(newDate)
        }}
      />
      <div className="text-sm">
        Selected date: <code>{date?.toLocaleDateString() || "none"}</code>
      </div>
    </div>
  )
}

export const Default: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    placeholder: "Pick a date",
  },
}

export const CustomStyling: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    placeholder: "Select date...",
    className: "w-[250px] rounded-xl",
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-100 p-3 rounded-lg">
        <Story />
      </div>
    ),
  ],
}

export const Disabled: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    placeholder: "Pick a date",
    disabled: true,
  },
}
