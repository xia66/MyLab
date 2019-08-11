const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');//导入生成html文件的插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin") //独立打包css文件插件
const getPageConfig = require('./page.config');

// 多页面配置解析
let entry = {root: path.resolve(__dirname, 'src/root.jsx')};
let pageHtmlPlugin = [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.tmpl.html'),
        chunks: ['root'],
        filename: 'index.html'
    })
]
getPageConfig().forEach((page) => {
    entry[page.name] = path.resolve(__dirname, page.entry); // 多入口
    pageHtmlPlugin.push(new HtmlWebpackPlugin({ // 多页面
        template: path.join(__dirname, page.template),
        chunks: [page.name],
        filename: page.filename
    }))
})

//向外暴露一个配置对象，commonjs规范（因为webpack是基于node构建）
//webpack默认只能打包处理.js后缀的文件，像.jpg .vue等文件无法主动处理，所以需要配置第三方loader
module.exports = {
    mode: 'development', //development  production ( 生产环境会将代码压缩 )

    entry,

    output: {
        path: __dirname + "/build",
        filename: "scripts/[name]-[hash].js",
        chunkFilename: 'scripts/[name]-[hash].chunk.js',
    },
    //解析配置，简化引入文件书写
    resolve:{
    // 解析模块请求的选项
    // （不适用于对 loader 解析）
        // 使用的扩展名
        extensions:['*', '.js','.jsx'],//自动解析的后缀名
        alias:{
            // 模块别名列表
            $Static:path.resolve(__dirname,'src/static/'),
            $Pubilc:path.resolve(__dirname,'src/public/'),
            $Containers:path.resolve(__dirname,'src/containers/'),
            $Components:path.resolve(__dirname,'src/components/'),
        }
    },

    plugins: [
        ...pageHtmlPlugin,
        
        //单独打包css，多页面配置如下,每个css都单独打包，这样页面不会报引用同一个css的错误
        new MiniCssExtractPlugin({//选项与htmlPlugin类似
            filename: "style/[name].css",
            chunkFilename: "[id].css"
        }),

        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        }),
        new webpack.optimize.SplitChunksPlugin({
            chunks: "all",
            minSize: 20000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true
        })
    ],

    module: {//第三方loader
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/ // 在使用babel-loader时候一定要加上exclude,排除node_modules文件夹 
            },
            //开启eslint
            // {
            //     test: /\.(js|jsx)$/,
            //     use: 'eslint-loader',
            //     exclude: /node_modules/ 
            // },
            {   //css/less打包
                test: /\.(css|less)$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                /*Loader必须严格按照这个顺序，不然会报错。解析顺序是从右到左*/
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require("autoprefixer"), /*在这里添加*/
                                require('postcss-px2rem')({remUnit: 12}),
                                require('postcss-flexbugs-fixes'),

                            ]
                        }
                    },
                    "less-loader"
                ]

            },
            {   //防止antd冲突的配置
                test: /\.css$/,
                exclude: /(src)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                use:[{
                        loader:'url-loader',
                        options:{ // 这里的options选项参数可以定义多大的图片转换为base64
                            name: '[name].[ext]',
                            limit:50000, // 表示小于50kb的图片转为base64,大于50kb的是路径
                            outputPath:'images' //定义输出的图片文件夹
                        }
                    },
                    {   //压缩图片要在file-loader之后使用
                        loader:'image-webpack-loader',
                        options:{
                            bypassOnDebug: true
                        }
                    }
                ]
            }
        ]
    },

    devtool: "cheap-source-map"
}
