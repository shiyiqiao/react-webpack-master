/**
 * Created by panca on 16/8/14.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [ path.resolve(__dirname, './app/main.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    devtool:["atool-build --devtool"],
    // devServer: {
    //     inline: false,
    //     port: 8181
    // },
    resolve:{
        extensions:['','.js','.json']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude:/^node_modules$/, // /(node_modules|bower_components)/,
                query: {
                    presets: ['react','es2015'],
                    "plugins":[
                        "transform-object-assign",
                        "transform-object-rest-spread",
                        ["import",{"libraryName":"antd","style":true}],

                    ]
                }
            },
            {
                test: /\.css$/,
                exclude: /^node_modules$/,
                loader: "style!css"
            },
            {
                test: /\.less/,
                exclude: /^node_modules$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            // {
            //     test: /\.(png|jpg)$/,
            //     exclude: /^node_modules$/,
            //     loader: 'url-loader?limit=100000'
            // },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                exclude: /^node_modules$/,
                loader: 'url-loader?limit=100000&name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
       // new webpack.HotModuleReplacementPlugin()
    ]
};


