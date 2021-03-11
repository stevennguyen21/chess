const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'client/index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.m?(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.s[c]ss$/i,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]

        }
      ]
    }
  }