// third-party libraries
import merge from 'webpack-merge';
import webpack from 'webpack';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';

// common configuration
import common from './webpack.config.common.js';

/**
 * @desc production configuration
 */
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJSPlugin(),
  ],
});