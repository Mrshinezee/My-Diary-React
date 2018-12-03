// third-party libraries
import merge from 'webpack-merge';
import webpack from 'webpack';

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
        SERVER_URL: JSON.stringify('https://my-diary-collins.herokuapp.com'),
      },
    }),
  ],
});