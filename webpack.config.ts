/* eslint-disable @typescript-eslint/no-explicit-any */
import 'webpack-dev-server'
import * as dotenv from 'dotenv'
import { Configuration as WebpackConfiguration } from 'webpack'
import ESLintPlugin from 'eslint-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import StylelintPlugin from 'stylelint-webpack-plugin'
import postcssPresetEnv from 'postcss-preset-env'
import { getIfUtils } from 'webpack-config-utils'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

dotenv.config()
const { ifProduction } = getIfUtils(process.env.NODE_ENV ?? 'production')

const config = (env: Record<string, any>): WebpackConfiguration => {
  return {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: { node: 'current' } }],
                '@babel/preset-typescript',
                ['@babel/preset-react', { runtime: 'automatic' }],
              ],
              plugins: env?.WEBPACK_SERVE ? ['react-refresh/babel'] : [],
            },
          },
        },
        {
          test: /\.mdx?$/,
          use: [
            {
              loader: '@mdx-js/loader',
              options: {},
            },
          ],
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            ifProduction(MiniCssExtractPlugin.loader, 'style-loader'),
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [postcssPresetEnv()],
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: ifProduction(
              'images/[name].[contenthash][ext][query]',
              'images/[name][ext][query]',
            ),
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: ifProduction(
              'fonts/[name].[contenthash][ext][query]',
              'fonts/[name][ext][query]',
            ),
          },
        },
      ],
    },
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
        configFile: '.stylelintrc',
        context: 'src',
      }),
    ],
  }
}

export default config
