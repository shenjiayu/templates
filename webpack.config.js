const ip = require('ip');
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageConfig = require('./package.config');

module.exports = (env = {
  minify: false,
  production: false,
}) => {
  const common = {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          enforce: 'pre',
        },
        {
          test: /\.tsx?$/,
          loader: 'tslint-loader',
          exclude: /node_modules/,
          enforce: 'pre',
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            'postcss-loader',
          ],
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/.vue$/],
          },
        },
        {
          test: /\.md$/,
          use: [
            'vue-loader',
            {
              loader: 'markdown-to-vue-loader',
              options: {
                componentWrapper: '<example></example>',
                preWrapper: '<highlight></highlight>',
                tableClass: 'table table--bordered table--striped table--responsive',
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|ico|svg|eot|ttf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]',
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.production || env.minify ? 'production' : 'development'),
      }),
    ],
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm',
      },
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.vue'],
    },
  };

  return env.production ? (() => {
    const productions = ['commonjs2', 'umd'].map(target => (webpackMerge(common, {
      entry: './src',
      output: {
        path: path.resolve(packageConfig.dir, './dist'),
        filename: `${packageConfig.name}${target === 'commonjs2' ? '.common' : ''}.js`,
        library: packageConfig.library,
        libraryExport: 'default',
        libraryTarget: target,
      },
      plugins: [
        new webpack.BannerPlugin({
          banner: packageConfig.banner,
          raw: true,
        }),
      ],
      externals: {
        vue: {
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue',
          root: 'Vue',
        },
      },
    })));

    return env.minify ? productions.concat(productions.map(production => webpackMerge(production, {
      output: {
        filename: `${packageConfig.name}${production.output.libraryTarget === 'commonjs2' ? '.common' : ''}.min.js`,
      },
      plugins: [
        new webpack.optimize.UglifyJsPlugin(),
      ],
    }))) : productions;
  })() : webpackMerge(common, {
    entry: './docs',
    output: {
      path: path.resolve(__dirname, './docs'),
      filename: 'app.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        favicon: './docs/favicon.ico',
        filename: 'index.html',
        template: './docs/index.html',
      }),
    ],
  }, env.minify ? {
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
    ],
  } : {
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      host: ip.address(),
      hot: true,
      open: true,
      overlay: true,
    },
    devtool: 'eval',
  });
};
