import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.(tsx|ts)$/],
          include: ['../src'],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: true },
          parser: 'typescript',
        },
      },
    },
  ],
  framework: {
    name: 'storybook-react-rsbuild',
    options: {},
  },
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
