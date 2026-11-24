import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.mjs', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|mjs|jsx)$/,
        exclude: /node_modules\/(?!(sharedLogic)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
    hot: true,
    open: false,
    proxy: [
      {
        context: ['/api'],
        target: 'https://www.omdbapi.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '' },
      },
    ],
  },
};
