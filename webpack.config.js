const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
    entry: {
        button: path.resolve(__dirname, 'packages/button/index.js'),
        input: path.resolve(__dirname, 'packages/input/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'packages/core/dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
    },
    externals: [
        {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: ['react'],
                amd: 'react',
                umd: 'react',
            },
        },
        '@material-ui/core',
        '@material-ui/icons',
        /@material-ui\/core\/*./,
        /@material-ui\/icons\/*./,
        'styled-components',
        'react-dom',
    ],
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
            react: path.resolve(__dirname, 'node_modules/react'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
        },
        extensions: ['.js', '.jsx', '.css', '.scss'],
        modules: [path.join(__dirname, 'node_modules')],
        plugins: [new DirectoryNamedWebpackPlugin()],
    },
};
