const electronMainConfigs = require('./webpack.electron.main.js');
const electronPreloadConfigs = require('./webpack.electron.preload');
const reactConfigs = require('./webpack.react.js');

module.exports = [
    electronMainConfigs,
    electronPreloadConfigs,
    reactConfigs
];
