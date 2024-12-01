import type { Preview } from "@storybook/react";
import "@/themes/globals.css"; // Import global styles (important for tailwind)

const preview: Preview = {
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
