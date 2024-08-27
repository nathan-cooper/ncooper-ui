import type { Meta, StoryObj } from "@storybook/react";
import { Tile } from "./Tile";
import connectIcon from "../../assets/connect_icon.png"

const meta: Meta<typeof Tile> = {
  component: Tile
};

export default meta;

type Story = StoryObj<typeof Tile>;

export const Default: Story = {
    args: {
        title: "Title",
        description: "Description of the Tile",
        icon: connectIcon
    }
}