const path = require('path');

module.exports = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx|mdx))'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app', // Add this line
    '@chromatic-com/storybook'
  ],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
      include: path.resolve(__dirname, '../src'),
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};