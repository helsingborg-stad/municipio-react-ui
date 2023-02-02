/* eslint-disable @typescript-eslint/no-explicit-any */
import 'webpack-dev-server'
import * as dotenv from 'dotenv'
import { Configuration as WebpackConfiguration } from 'webpack'
import ESLintPlugin from 'eslint-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import StylelintPlugin from 'stylelint-webpack-plugin'

dotenv.config()

const config: WebpackConfiguration = {
  plugins: [
    new ESLintPlugin({
      extensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'mdx',
        'stories.ts',
        'stories.tsx',
      ],
      context: 'src',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      logger: 'webpack-infrastructure',
    }),
    new StylelintPlugin({
      configFile: '.stylelintrc.js',
      context: 'src',
    }),
  ],
}

export default config
