import * as webpack from 'webpack';
import * as HtmlWebPackPlugin from 'html-webpack-plugin';

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
});

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }],
  },
  plugins: [htmlPlugin],
};

export default config;
