import React from "react";
import type { Preview, StoryFn } from "@storybook/react";
import { ThemeProvider } from "../src/themes/theme-provider";
import "../src/themes/globals.css";

const preview: Preview = {
  decorators: [
    (Story: StoryFn) => (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;