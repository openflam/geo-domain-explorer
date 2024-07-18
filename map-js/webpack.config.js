const path = require('path');
const { library } = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../assets'),
        library: 'maputils',
    }
};