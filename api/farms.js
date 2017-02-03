const express = require('express')
const route = express.Router()

module.exports = function (db) {
  route.get('/', get)
  route.post('/', post)
  route.get('/checkAuthenticated', checkAuthenticated)
  route.post('/login', login)

  function login (req, res, next) {
    const email = req.body.email
    const password = req.body.password
    console.log('email and password', email, password)
    req.session.userName = req.body.name
    res.json({response: req.session.userName})
  }

  function get (req, res, next) {
    db.find('farms')
      .then((farms) => {
        res.json(farms)
      })
  }

  // route.get('/myfarms', checkAuthenticated, get)

  function checkAuthenticated (req, res, next) {
    if (req.session.userName) {
      res.json({response: req.session.userName})
    } else {
      res.json({invalid: 'Not Logged In'})
    }
  }

  function post (req, res, next) {
    db.add('farms', req.body)
      .then((farms) => {
        res.json(farms)
      })
    .catch(next)
  }
  return route
}
