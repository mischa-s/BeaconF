import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducer'

const initialState = {
  farms: {
    1: {
      id: 1,
      name: 'Skilleby',
      location: 'Sweden',
      type: 'Small Holding'
    },
    2: {
        id: 2,
        name: 'Triple H',
        location: 'Canada',
        type: 'Cattle Ranch'
    }
  }
}

const store = createStore(reducer,initialState)

document.addEventListener('DOMContentLoaded', (e) => {

  store.subscribe(() => {
    const state = store.getState(initialState)

    render(state)
  })
  function render (state) {
    const root = document.querySelector('#app')
    ReactDOM.render(
      <App state={state} store={store}/>,
      root
    )
  }

  store.dispatch({type: 'anytype'})
})
