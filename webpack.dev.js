const autoprefixer = require('autoprefixer');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode : 'development',
    entry: ['./src/scss/main.scss', './src/main.js'],
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]?[hash]'
                }
            },
            {
                test: /.pdf$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `files/[name].[ext]`
                        }
                    }
                ]
            },
            {
                test: /.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].min.css',
                        },
                    },
                    { loader: 'extract-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer()],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['./node_modules'],
                        },
                    }],
            }
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    devtool: '#eval-source-map',
    plugins: [
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([
            { context: 'src', from: '**/*.html' },
            { from: 'src/**/*.ttf', to: 'fonts/', flatten: true },
            { from: 'src/**/*.png', to: 'img/', flatten: true },
            { from: 'src/**/*.svg', to: 'img/', flatten: true },
            { from: 'src/LICENSE', flatten: true },
            { from: 'src/README.md', flatten: true }
        ]),
        new OptimizeCssAssetsPlugin()
    ]
};