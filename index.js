/**
 * ipinfodb middleware for Express
 * @author Jenil Gogari
 */

module.exports = geo;

function geo(opts) {
  if(!(opts && opts.key)) throw new Error('Need a ipinfodb key! Visit http://ipinfodb.com')

  var client = require('ipinfodb')(opts);
  return function geoMiddleware(req, res, next) {
    req.ipinfo = undefined;
    try {
      var ip = req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress;
      client.geolocate(ip.split(':').splice(-1)[0], function (err, r) {
        req.ipinfo = r;
        next();
      });
    } catch (e) {
      next();
    }
  }
}
