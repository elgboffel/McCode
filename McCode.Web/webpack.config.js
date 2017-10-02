var path = require('path');

module.exports = {
    entry: './scripts/training/react/react.basics.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'scripts/dist/')
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};