const express = require("express")
const route = express.Router()


module.exports = function(db) {

  route.get("/", get)
  route.post("/", post)

  function get(req, res, next) {
    db.find('farms')
      .then((farms) => {
        res.json(farms)
      })
  }
  function post(req, res, next) {
    db.add('farms', req.body)
      .then((farms) => {
        res.json(farms)
      })
    .catch(next)
  }
  return route
}
