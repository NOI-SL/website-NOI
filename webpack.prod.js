const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000
    },
    entry: ['./src/scss/main.scss', './src/js/app.js'],
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].min.css',
                        },
                    },
                    {loader: 'extract-loader'},
                    {loader: 'css-loader'},
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
                    }
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015'],
                  plugins: ['transform-object-assign']
                },
            }
        ],
    },
};