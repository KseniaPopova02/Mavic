let mix = require("laravel-mix");

mix.sass("css/style.scss", "css/style.css").options({
  processCssUrls: false,
});

mix.js("js/main.js", "js/build.js");
