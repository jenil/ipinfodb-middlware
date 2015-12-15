Express Middleware for [ipinfodb.com](http://www.ipinfodb.com/ip_location_api.php)

## Install

`npm install ipinfodb-middleware`

## Usage
```javascript
var express = require('express');
var app = express();
var key = 'abcd'; // your ipinfodb.com API key
var ipinfodb = require('ipinfodb-middleware');

app.enable('trust proxy');

app.use(ipinfodb({key: key}));

app.get('/', function (req, res) {
  // IP info is now available in req.ipinfo
  res.json(req.ipinfo);
});


app.listen(3000);

```

The `req.ipinfo` will contain the following output if things worked fine.
```json
{
  "statusCode": "OK",
  "statusMessage": "",
  "ipAddress": "122.161.60.x",
  "countryCode": "IN",
  "countryName": "India",
  "regionName": "Delhi",
  "cityName": "Delhi",
  "zipCode": "110008",
  "latitude": "28.6667",
  "longitude": "77.2167",
  "timeZone": "+05:30"
}
```
---

##### Author

Jenil Gogari
- [Website](http://jgog.in)
- [Behance](https://www.behance.net/jenil)
- [Twitter](https://twitter.com/GeekGogari)
