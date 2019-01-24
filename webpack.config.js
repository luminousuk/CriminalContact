const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common_config = {
    devtool: 'inline-source-map',
    node: {
        __dirname: true
    },
    mode: process.env.ENV || "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(s?css)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => require("autoprefixer")
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".json"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimize: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "initial"
                }
            }
        }
    }
};

module.exports = [
    Object.assign({}, common_config, {
        target: "electron-main",
        entry: {
            main: "./src/main/app"
        },
        plugins: [
            new CleanWebpackPlugin(["dist"])
        ]
    }),
    Object.assign({}, common_config, {
        target: "electron-renderer",
        entry: {
            renderer: "./src/app/index"
        },
        output: {
            filename: "[name]-[chunkhash:4].js"
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "src/app/index.html"
            })
        ]
    })
];