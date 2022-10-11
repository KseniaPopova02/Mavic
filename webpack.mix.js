let mix = require("laravel-mix");

mix.options({
  // Don't perform any css url rewriting by default
  processCssUrls: false,
});

mix.sass("css/style.scss", "css/style.css");

mix.js("js/main.js", "js/build.js");
