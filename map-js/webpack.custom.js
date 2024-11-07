const path = require('path');
const { library } = require('webpack');

module.exports = {
    entry: './src/custom-visualizations/index.js',
    output: {
        filename: 'custom-main.js',
        path: path.resolve(__dirname, './dist'),
        library: 'maputils',
    }
};