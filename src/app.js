import './assets/scss/common.scss'
//Require this, window.$ is then available in the browser console.
//https://webpack.js.org/loaders/expose-loader/
require("./assets/css/index.css");
require("expose-loader?$!jquery");

console.log($('#aroot'))