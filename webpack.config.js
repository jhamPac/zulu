const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: './index.js',
        library: '',
        libraryTarget: 'commonjs',
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader', options: { rootMode: 'upward' } },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
        modules: [path.join(__dirname, 'node_modules')],
        plugins: [new DirectoryNamedWebpackPlugin()],
    },
};
