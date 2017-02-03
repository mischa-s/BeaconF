const React = require('react')
const RaisedButton = require('material-ui/RaisedButton')
const request = require('superagent')
const Logout = require ('./Logout')

const logout = (props) => {
  const {dispatch} = props

  function logout () {
    request.post('/api/v1/farms/logout')
      .end((err, res) => {
        if (err) console.log('error', err)
        else if (!res.body.response) {
          dispatch({type: 'LOGIN', payload: res.body.response})
        } else {
          console.log("that's not right")
          dispatch({type: 'LOGIN', payload: null})
        }
      })
  }
  return <button onClick={logout}>Logout</button>
}
module.exports = (logout)
