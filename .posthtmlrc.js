module.exports = {
  plugins: {
    'posthtml-img-autosize': {
      "root": "./images"
    },
    'posthtml-include': {
      root: __dirname + '/src',
      "useless-option": true
    },
  }
}