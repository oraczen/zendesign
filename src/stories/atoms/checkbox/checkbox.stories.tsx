import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/components/atoms/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story: "A control that allows the user to toggle between checked and not checked."
      },
    },
  },
  argTypes: {
   disabled: {
    control: 'boolean',
   }
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const RenderCheckbox = (args: object) => (
    <div className="items-top flex space-x-2">
    <Checkbox id="terms1" {...args} />
    <div className="grid gap-1.5 leading-none">
      <label
        htmlFor="terms1"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
      <p className="text-sm text-muted-foreground">
        You agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  </div>
  );

export const Default: Story = {
  render: RenderCheckbox,
};
 