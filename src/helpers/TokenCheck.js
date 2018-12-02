// third-party libraries
import jwt from 'jsonwebtoken';


const auth = {

  /**
  * @static
  * @param {string} bearerToken
  * @description Verifies user token
  * @return {object} object
  */
  verifyToken(bearerToken) {
    console.log('bearerToken',bearerToken);
    const bearer = bearerToken.split(' ');
    const token = bearer[1];
    let decoded = {};
    try {
      decoded = jwt.decode(token);
    } catch (error) {
      decoded = {
        error: error.message,
      };
    }
    return decoded;
  },

  /**
  * @static
  * @param {string} token
  * @param {boolean} response
  * @param {function} next
  * @description Verifies user token
  * @return {object} object
  */
  verifyUserToken(token) {
    console.log('token',token)
    if (!token) {
      return false;
    }
    console.log('token',token)
    const decoded = auth.verifyToken(token);
    console.log('decoded',decoded)
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      return false;
    }
    return true;
  }
};

export default auth;
