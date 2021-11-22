let mix = require('laravel-mix');
const webpack = require('webpack');

mix.autoload({
  jquery: ['$', 'window.jQuery']
});

mix.copy('src/manifest.json','dist')
.copy('node_modules/@mdi/font/fonts','dist/fonts')
.copy('node_modules/@mdi/font/css','dist/CSS')
.copy('src/Popup','dist')
.copy('src/Icons','dist')
.copyDirectory('src/Assets/','dist/Assets').copyDirectory('src/Fonts/','dist/Fonts').sass('src/CSS/All.scss','')
.js('src/App.js','dist').setPublicPath('dist');