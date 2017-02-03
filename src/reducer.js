const clone = require('clone')

module.exports = reducer

function reducer (state, action) {
  const newState = clone(state)
  // console.log('tell me you arrived at the reducer')
  switch (action.type) {

    case 'GET_ALL_FARMS':
      newState.farms = action.payload
      return newState

    case 'LOGIN':
      newState.loggedIn = action.payload
      return newState

    case 'SHOWING_LOGIN':
      newState.showingLogin = true
      return newState

    case 'HIDING_LOGIN':
      newState.showingLogin = false
      return newState

    case 'SHOWING_REGISTER':
      newState.showingRegister = true
      return newState

    case 'HIDING_REGISTER':
      newState.showingRegister = false
      return newState

    default:
      return newState
  }
}
