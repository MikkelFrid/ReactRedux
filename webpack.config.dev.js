import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors/
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        path: path.resolve(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, 'client'),
                loaders: ['react-hot-loader/webpack','babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};