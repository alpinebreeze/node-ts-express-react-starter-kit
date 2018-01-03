const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        use: [{
                            loader: 'css-loader',
                            options: {
                                context: "src",
                                modules: true,
                                localIdentName: '[local]_[hash:base64:5]',
                            }
                        }]
                    })
                }
            ]
        },

        resolve: {
            extensions: [".tsx", ".ts", ".js"]
        },

        output: {
            filename: 'bundle.js',
            path: path.resolve('./out/static')
        },

        plugins: [
            new ExtractTextPlugin('[name].css')
        ]
    }

    if (env && env.bundleAnalyzer) {
        config.plugins.push(new BundleAnalyzerPlugin());
    }

    return config;
};