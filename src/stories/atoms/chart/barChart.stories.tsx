import type { Meta, StoryObj } from "@storybook/react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/atoms/chart"
import { chartData, chartConfig } from "./chart.utils"

const meta: Meta<typeof ChartContainer> = {
  title: "Atoms/Chart",
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
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
}


