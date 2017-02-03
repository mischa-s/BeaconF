import React from 'react'
import { connect } from 'react-redux'
import request from 'superagent'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'

class Register extends React.Component {
  render () {
    const registerForm =
      <div>
        <form>
          <Paper className='paper' zDepth={3}>
            <TextField hintText='User Name' className='input' ref='userName' />
            <br />
            <TextField hintText='Password' className='input' type='password' ref='password' />
            <br />
            <TextField hintText='Email' className='input' type='email' ref='email' />
            <br />
          </Paper>
          <br />
          <div className='button'>
            <RaisedButton onClick={this.handleLoginSubmit.bind(this)}>Register</RaisedButton>
          </div>
        </form>
      </div>

    return (
      registerForm
    )
  }
  handleLoginSubmit (e) {
    const { dispatch } = this.props
    const userName = this.refs.userName.input.value
    const password = this.refs.password.input.value
    const email = this.refs.email.input.value

    request.post('/api/v1/farms/register')
      .send({userName, password, email})
      .end((err, res) => {
        if (err) console.log('error', err)
        else if (res.body.response) {
          dispatch({type: 'LOGIN', payload: res.body.response})
        } else {
          console.log("register didn't work")
          dispatch({type: 'LOGIN', payload: false})
        }
      })
  }
}

module.exports = connect((state) => state)(Register)