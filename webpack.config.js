const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: './index.js',
        library: '',
        libraryTarget: 'umd',
    },
    externals: {
        react: {
            commonjs: 'React',
            commonjs2: 'React',
            amd: 'React',
            umd: 'React',
            root: 'React',
        },
        'material-ui': {
            commonjs: 'material-ui',
            commonjs2: 'material-ui',
            amd: 'material-ui',
            umd: 'material-ui',
            root: 'material-ui',
        },
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
        alias: {
            react: path.resolve(__dirname, '../node_modules/react'),
        },
        extensions: ['.js', '.jsx', '.css', '.scss'],
        modules: [path.join(__dirname, 'node_modules')],
        plugins: [new DirectoryNamedWebpackPlugin()],
    },
};
