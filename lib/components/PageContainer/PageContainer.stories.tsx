import type { Meta, StoryObj } from "@storybook/react";
import { PageContainer } from "./PageContainer";

const meta: Meta<typeof PageContainer> = {
  component: PageContainer,
};

export default meta;

type Story = StoryObj<typeof PageContainer>;

export const Default: Story = {
    args: {
      children: "This is the page container contents"
    }
}

export const Internal: Story = {
  args: {
    variant: "internal",
    children: "This is the page container contents"
  }
}