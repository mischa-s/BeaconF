const express = require('express')
const route = express.Router()
const bcrypt = require('bcryptjs')
module.exports = function (db) {
  route.get('/', get)
  route.post('/', post)
  route.get('/checkAuthenticated', checkAuthenticated)
  route.post('/login', login)
  route.post('/register', register)

  function login (req, res, next) {
    const userName = req.body.userName
    const password = req.body.password
    db.getUserByUserName(userName)
      .then(user => {
        if (!user[0]) {
          res.json({error: 'Invalid Email/Password'})
        } else {
          req.session.userName = req.body.userName
          res.json({response: req.session.userName})
        }
      })
  }
  function register (req, res, next) {
    const password = req.body.password
    bcrypt.genSalt(8, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        req.body.password = hash
        db.addUser('users', req.body)
          .then((user) => {
            res.json(user)
          })
      })
    })
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
