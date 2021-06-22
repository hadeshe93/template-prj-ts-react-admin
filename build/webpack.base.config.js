const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');
// const { getThemeVariables } = require('antd/dist/theme');

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    filename: '[name].[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({ libraryName: 'antd' })],
          }),
          compilerOptions: {
            module: 'es2015',
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项
                // lessOptions 的配置写法在 less-loader@6.0.0 开始支持。
                // modifyVars: getThemeVariables({
                //   dark: true, // 开启暗黑模式
                //   compact: true, // 开启紧凑模式
                // }),
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      // 该配置会将 node_modules 下的包单独抽离出来，打成一个 vendor 文件
      chunks: 'all',
      automaticNameDelimiter: '.',
    },
  },
};
