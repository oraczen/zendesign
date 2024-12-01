import type { StorybookConfig } from "@storybook/react-webpack5";
import * as path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: [
     "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/ui/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.mdx"
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, "../tsconfig.json"),
        }),
      ];
      
      // Adding direct aliases as well
    config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src"),
        "@/components": path.resolve(__dirname, "../src/components"),
        "@/ui": path.resolve(__dirname, "../src/components/ui"),
        "@/themes": path.resolve(__dirname, "../src/themes"),
        "@/styles": path.resolve(__dirname, "../src/styles"),
      };
    }
    return config;
  },
   staticDirs: ['../public'], // If you have static files in public directory
};

export default config;