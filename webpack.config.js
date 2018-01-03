const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = (env) => {

    const config = {
        entry: './src/client/index.tsx',

        devtool: 'source-map',

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader'
                    })
                },
                {
                    test: /\.svg$/,
                    use: 'file-loader',

                }
            ]
        },

        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },

        output: {
            filename: 'bundle.js',
            path: path.resolve('./out/static'),
            publicPath: "static/"
        },

        plugins: [
            new ExtractTextPlugin('styles.css')
        ]
    }

    if (env && env.bundleAnalyzer) {
        config.plugins.push(new BundleAnalyzerPlugin());
    }

    return config;
};