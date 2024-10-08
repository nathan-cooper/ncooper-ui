import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        title: "Title",
        description: "Description of the card",
        link: "/some-path"
    }
}

export const Variant_White: Story = {
  args: {
      title: "Title",
      description: "Description of the card",
      link: "/some-path",
      variant: "white"
  }
}