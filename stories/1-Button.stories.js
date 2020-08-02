import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import React from "react";
import BoxAtom from "../build/Atoms/BoxAtom";

export default {
  title: "Button",
  component: Button,
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Emoji = () => <BoxAtom />;
