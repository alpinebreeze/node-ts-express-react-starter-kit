const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = (env) => {

    const config = {
        entry: './src/client/index.tsx',

        devtool: "source-map",

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },

        resolve: {
            extensions: [".tsx", ".ts", ".js"]
        },

        output: {
            filename: 'bundle.js',
            path: path.resolve('./out/public')
        },

        plugins: []
    }

    if (env && env.bundleAnalyzer) {
        config.plugins.push(new BundleAnalyzerPlugin());
    }

    return config;
};