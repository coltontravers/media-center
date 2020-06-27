require("colors");
const path = require("path");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader", "eslint-loader"]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 100000,
                        name: "[name].[ext]"
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    },
    plugins: [new PrettierPlugin()],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "public"),
        onListening: (server) => {
            const { port, address } = server.listeningApp.address();

            // eslint-disable-next-line no-console
            console.log(
                "Front-end started at:".green,
                `http://${address}:${port}`.underline
            );
        },
        stats: "minimal",
        noInfo: true,
        host: "0.0.0.0"
    }
};
