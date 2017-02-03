const express = require('express')
const route = express.Router()
const bcrypt = require('bcryptjs')
module.exports = function (db) {
  route.get('/', get)
  route.post('/', post)
  route.get('/checkAuthenticated', checkAuthenticated)
  route.post('/login', login)
  route.post('/logout', logout)
  route.post('/register', register)

  function login (req, res, next) {
    const userName = req.body.userName
    const submittedPassword = req.body.password
    db.getUserByUserName(userName)
      .then(user => {
        const {name, id, password} = user[0]
        if (!user[0]) {
          res.json({error: 'Invalid Email/Password'})
        } else {
          bcrypt.compare(submittedPassword, password, function (err, response) {
            console.log(response);
            if (err) {
              console.log(err)
            } else if (response) {
              req.session.userId = id
              req.session.userName = name
              res.json({login: true, userName: name, id})
            } else {
              res.json({login: false, error: 'Invalid email/Password'})
            }
          })
        }
      })
  }

  function logout (req, res, next) {
    req.session.userName = null
    res.json({response: req.session.userName})
  }

  function register (req, res, next) {
    const password = req.body.password
    bcrypt.genSalt(8, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        req.body.password = hash
        db.addUser('users', req.body)
          .then((user) => {
            res.json({response: user[0]})
          })
          .catch(err)
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
