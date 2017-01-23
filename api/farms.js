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
  return route
}

 function post(req, res, next) {}
