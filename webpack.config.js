var webpack = require('webpack'),
    sassVars =  './sassVars.json';//JSON.stringify(sassGlobals);

module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                // edit this for additional asset file types
                test: /\.(png|jpg|gif)$/,
                loader: 'file?name=[name].[ext]?[hash]'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },

        ]
    },
    vue: {
        loaders: {
            sass: "style!css!sass!jsontosass?path="+ sassVars
        }
    },
    // example: if you wish to apply custom babel options
    // instead of using vue-loader's default:


    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    }


}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    module.exports.devtool = '#source-map'
}
