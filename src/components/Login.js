import React from 'react'
import { connect } from 'react-redux'
import '../App.css'
import request from'superagent'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'


class Login extends React.Component{
  handleLoginSubmit () {
    const name = this.refs.Name.input.value
    const password = this.refs.password.input.value


    request.post('/api/v1/farms/login')
    .send ({name: name, password: password})
    .end((err,res) => console.log('heard back from API response', res))

  }

  render() {

    return (
      <div>
      <form>
      <Paper className='paper' zDepth={3}>
      <TextField hintText= 'Name' className='input' ref='name'/>
      <br />
      <TextField hintText= 'Password' className='input' ref='password'/>
      <br />
      </Paper>
      <br />
      <div className ='button'>
        <RaisedButton onClick={() => {handleLoginSubmit}}>Login</RaisedButton>
      </div>
      </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(Login)
