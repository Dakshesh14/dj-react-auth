module.exports = {
    entry: ['babel-polyfill', "./src/index.js", ],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ],
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"]
                    }
                }
            },
        ],
    },
};