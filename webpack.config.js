var path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './index.jsx'),
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                exclude: /node_modules/,
                use: 'babel-loader',


            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    }

}