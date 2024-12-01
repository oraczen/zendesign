import type { Meta, StoryObj } from "@storybook/react"
import { Pie, PieChart, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/atoms/chart"
import { chartConfig } from "./chart.utils"

// Pie chart needs data in a different format
const pieData = [
  { name: "Desktop", value: 400 },
  { name: "Mobile", value: 300 },
]

const COLORS = [
  "var(--color-desktop)",
  "var(--color-mobile)",
]

const meta: Meta<typeof ChartContainer> = {
  title: "Atoms/Chart/Pie",
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
      <PieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {pieData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
      </PieChart>
    </ChartContainer>
  ),
}
