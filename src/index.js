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
      type: 'Small Holding',
      mainImageURL: 'http://www.skillebytradgard.se/wp-content/uploads/2016/06/cropped-SK-TR-LOGO-kopia-3.png'
    },
    2: {
        id: 2,
        name: 'Triple H Beef',
        location: 'Canada',
        type: 'Cattle Ranch',
        mainImageURL: 'http://www.triple-h-beef.com/images/grazing-cows-for-email.jpg'
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
