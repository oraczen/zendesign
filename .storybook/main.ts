import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: [
   "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",  // Points to your stories directory
    "../src/stories/**/*.mdx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      fastRefresh: true,
      strictMode: true,
    },
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  babel: async (options: any) => ({
    ...options,
    presets: [
      ...options.presets || [],
      ['@babel/preset-react', { runtime: 'automatic' }],  // This enables the new JSX transform
    ],
  }),
  webpackFinal: async (config) => {
    if (!config.module) config.module = { rules: [] };
    if (!config.module.rules) config.module.rules = [];
    
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src"),
      };
    }
    
    // Add PostCSS loader
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            implementation: require('postcss'),
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};

export default config;


