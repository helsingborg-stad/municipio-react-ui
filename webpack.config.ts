/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path'
import 'webpack-dev-server'
import * as dotenv from 'dotenv'
import { Configuration as WebpackConfiguration } from 'webpack'
import ESLintPlugin from 'eslint-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import StylelintPlugin from 'stylelint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import postcssPresetEnv from 'postcss-preset-env'
import { getIfUtils } from 'webpack-config-utils'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

dotenv.config()
const { ifProduction } = getIfUtils(process.env.NODE_ENV ?? 'production')

const config = (env: Record<string, any>): WebpackConfiguration => {
  return {
    entry: { main: './src/index.tsx' },
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
      new HtmlWebpackPlugin({
        template: './src/template.html.ejs',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
      ...(env?.WEBPACK_SERVE ? [new ReactRefreshWebpackPlugin()] : []),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json', '.mdx', '.ejs'],
    },
    devtool: ifProduction(false, 'inline-source-map'),
    output: {
      filename: ifProduction('[name].[contenthash].js', '[name].js'),
      path: path.resolve(__dirname, 'dist'),
      clean: env?.WEBPACK_SERVE ? false : true,
    },
  }
}

export default config
