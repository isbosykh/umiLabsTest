var path = require('path');

module.exports = {
    entry:
        {
            main: [
                'animate-css-webpack!./animate-css.config.js',
                './src/app.js',
            ]

        },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.woff$/,
                use: {
                    loader: "url-loader",
                },
            },
        ]
    }
};
 