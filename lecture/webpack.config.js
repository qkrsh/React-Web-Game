module.exports = {
    name: 'word-relay-setiing',
    mode:'development',
    devtool: 'eval',
    resolve:{
        extensions:['.js', '.jsx']
    },
    entry:{
        app:['./client'],

    },//입력

    module:{
        rules:[{
            test : /\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env', '@babel/preset-react'],
            }
        }]
    },

    output:{
        filename: 'app.js'
    },//출력
};