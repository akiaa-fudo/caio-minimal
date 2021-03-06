const path = require('path');

module.exports = {
    // Build Mode
    mode: 'development',
    // Electron Entrypoint
    entry: './src/preload.ts',
    target: 'electron-preload',
    resolve: {
        alias: {
            ['@']: path.resolve(__dirname, 'src')
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [{
            test: /\.ts$/,
            include: /src/,
            use: [{loader: 'ts-loader'}]
        }]
    },
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: 'preload.js'
    }
};
