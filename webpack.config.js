const webpack = require('webpack');

const babelSettings = {
  presets: ['react', 'es2015', 'stage-0'],
};

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx',
  ],
  externals: {
    jquery: 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      Clock: 'app/components/Clock.jsx',
      Controls: 'app/components/Controls.jsx',
      applicationStyles: 'app/styles/app.sass',
      formatters: 'app/utils/formatters.js',
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        loaders: [
          `babel-loader?${JSON.stringify(babelSettings)}`,
          'eslint-loader',
        ],
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
};
