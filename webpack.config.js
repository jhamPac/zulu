const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'index.js',
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
            button: path.resolve(__dirname, './packages/button/dist/index.js'),
        },
        extensions: ['.js', '.jsx', '.css', '.scss'],
        modules: [path.join(__dirname, 'node_modules')],
        plugins: [new DirectoryNamedWebpackPlugin()],
    },
};
