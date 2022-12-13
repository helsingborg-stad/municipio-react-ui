/* eslint-disable @typescript-eslint/no-explicit-any */
import createWebpackConfig from '../webpack.config'

const webpackConfig = createWebpackConfig({})

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
  ],
  framework: '@storybook/react',
  core,
  typescript: { reactDocgen: 'react-docgen' },
  webpackFinal: async (config: any) => {
    const excludedPlugins = [
      'HtmlWebpackPlugin',
      'MiniCssExtractPlugin',
      'ReactRefreshWebpackPlugin',
    ]

    return {
      ...config,
      module: {
        ...config.module,
        rules: webpackConfig?.module?.rules,
      },
      plugins: [
        ...config.plugins,
        ...(webpackConfig?.plugins ?? []).filter(
          ({ constructor: { name } }) => !excludedPlugins.includes(name),
        ),
      ],
    }
  },
}
