const express = require("express")
const route = express.Router()


module.exports = function(db) {

  route.get('/', get)
  route.post('/', post)
  route.post('/login', login)


  function login (req, res, next) {
    req.session.userName = 'thisUser'
    console.log('this is req.session.userName', req.session.userName)
    res.json(req.session.userName)
  }

  function get (req, res, next) {
    db.find('farms')
      .then((farms) => {
        res.json(farms)
      })
  }

  function checkAuthenticated (req, res, next) {
    if(req.session.userName){
      next()
    } else {
      res.send('get outta heeeere!')
    }
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
