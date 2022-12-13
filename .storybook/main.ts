/* eslint-disable @typescript-eslint/no-explicit-any */
import webpackConfig from '../webpack.config'

export const core = {
  builder: 'webpack5',
}

export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/preset-scss',
  ],
  framework: '@storybook/react',
  core,
  typescript: { reactDocgen: 'react-docgen-typescript' },
  webpackFinal: async (config: any) => ({
    ...config,
    plugins: [...config.plugins, ...(webpackConfig?.plugins ?? [])],
  }),
}
