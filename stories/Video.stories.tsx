import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Video } from "./Video";

export default {
  title: "Example/Video",
  component: Video,
} as ComponentMeta<typeof Video>;

const Template: ComponentStory<typeof Video> = (args) => <Video {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  source: "https://www.w3schools.com/tags/movie.mp4",
};
