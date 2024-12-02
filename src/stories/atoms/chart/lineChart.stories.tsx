import React from "react";
import type { Meta, StoryObj } from "@storybook/react"
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/atoms/chart"
import { chartData, chartConfig } from "./chart.utils"

const meta: Meta<typeof ChartContainer> = {
  title: "Atoms/Chart/Line",
  component: ChartContainer,
}

export default meta
type Story = StoryObj<typeof ChartContainer>

export const Default: Story = {
  args: {
    config: chartConfig,
    className: "min-h-[200px] w-full max-w-lg",
  },
  render: (args) => (
    <ChartContainer {...args}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line type="monotone" dataKey="desktop" stroke="var(--color-desktop)" />
        <Line type="monotone" dataKey="mobile" stroke="var(--color-mobile)" />
      </LineChart>
    </ChartContainer>
  ),
} 