import type { Meta, StoryObj } from "@storybook/react";
import { InternalHeader } from "./InternalHeader";

const meta: Meta<typeof InternalHeader> = {
  component: InternalHeader
};

export default meta;

type Story = StoryObj<typeof InternalHeader>;

export const Default: Story = {
    args: {
      
    }
}