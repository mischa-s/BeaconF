import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import request from 'superagent'
import initialState from '../state'

import App from './components/App'

const store = createStore(reducer, initialState)
store.subscribe(() => {
})

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={App} />
        </Route>
      </Router>
    </Provider>
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
})
