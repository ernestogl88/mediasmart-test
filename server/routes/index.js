const express = require("express");
const router = express.Router();
const request = require("request-promise");
const mcache = require('memory-cache');

var cache = (duration) => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cachedBody = mcache.get(key)
    if (cachedBody) {
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body)
      }
      next()
    }
  }
}

router.get("/workers", cache(300), (req, res, next) => {
  var options = {
    uri: "http://work.mediasmart.io/?page=1&page_size=10",
    headers: {
      Authorization: "mediasmart2019"
    }
  };
  request(options)
    .then(workers => res.json(JSON.parse(workers)))
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
