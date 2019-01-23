const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

console.log(__dirname);

const common_config = {
    devtool: 'inline-source-map',
    node: {
        __dirname: true
    },
    mode: process.env.ENV || "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
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
        }
    })
];