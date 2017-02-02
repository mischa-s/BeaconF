const express = require('express')
const route = express.Router()

// route.get('/myfarms', checkAuthenticated, get)
module.exports = function (db) {
  route.get('/', get)
  route.post('/', post)
  route.post('/login', login)

  function login (req, res, next) {
    req.session.userName = req.body.name
    res.json({response: req.session.userName})
  }

  function get (req, res, next) {
    db.find('farms')
      .then((farms) => {
        res.json(farms)
      })
  }

  // function checkAuthenticated (req, res, next) {
  //   if (req.session.userName) {
  //     next()
  //   } else {
  //     res.send('get outta heeeere!')
  //   }
  // }

  function post (req, res, next) {
    db.add('farms', req.body)
      .then((farms) => {
        res.json(farms)
      })
    .catch(next)
  }
  return route
}
