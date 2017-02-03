import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import request from 'superagent'
import reducer from './reducer'
import initialState from '../state'

import App from './components/App'
import MyFarms from './components/MyFarms'
import Login from './components/Login'
import Home from './components/Home'

const store = createStore(reducer, initialState)
store.subscribe(() => {
})

const Root = ({store}) => {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <IndexRoute component = {Home} />
            <Route path ='/myfarms' component={MyFarms} />
          </Route>
          <Route path ='/login' component={Login} />
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
}
document.addEventListener('DOMContentLoaded', (e) => {
  const root = document.querySelector('#app')
  ReactDOM.render(
    <Root store={store} />,
    root
  )
  request('/api/v1/farms', (err, res) => {
    store.dispatch({type: 'GET_ALL_FARMS', payload: res.body})
  })
  request('/api/v1/farms/checkAuthenticated', (err, res) => {
		if (err) console.log('error', err)
		else if (res.body.response) {
			console.log('response', res);
			store.dispatch({type: 'LOGIN', payload: res.body.response})
		} else {
			console.log('Not Authenticated');
			store.dispatch({type: 'LOGIN', payload: null})
		}
	})
})
