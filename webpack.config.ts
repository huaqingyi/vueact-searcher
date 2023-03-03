import { join } from 'path';
import { WebpackConfiguration } from 'webpack-dev-server';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

export default <WebpackConfiguration>{
    mode: 'development',
    entry: { index: join(__dirname, 'src/main.tsx') },
    output: {
        path: join(__dirname, 'www'),
    },
    devServer: {
        // open: true,
        hot: true,
        port: 7777,
    },
    module: {
        rules: [
            {
                test: /\.ts|tsx$/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'ts-loader' },
                ],
                exclude: [/node_modules/],
            },
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: join(__dirname, 'public/index.html'),
            filename: 'index.html',
            inject: 'head',
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        unused: true,
                        drop_console: true,
                        drop_debugger: true,
                        dead_code: true,
                    },
                },
                parallel: true,
            }),
        ],
    },
};