import type { Meta, StoryObj } from "@storybook/react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/atoms/inputOtp";

const meta: Meta<typeof InputOTP> = {
  title: "Atoms/InputOTP",
  component: InputOTP,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    maxLength: {
      control: "number",
      description: "Maximum number of characters",
      defaultValue: 6,
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  args: {
    maxLength: 6,
    disabled: false,
  },
  render: ({ maxLength, disabled }) => (
    <InputOTP maxLength={maxLength} disabled={disabled}>
      <InputOTPGroup>
        {Array.from({ length: maxLength }, (_, i) => (
          <>
            <InputOTPSlot key={i} index={i} />
            {i === Math.floor(maxLength / 2) - 1 && maxLength > 4 && (
              <InputOTPSeparator />
            )}
          </>
        ))}
      </InputOTPGroup>
    </InputOTP>
  ),
};
