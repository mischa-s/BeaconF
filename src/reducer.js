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

    case 'SHOWING_LOGIN':
      newState.showingLogin = !newState.showingLogin

    case 'SHOWING_REGISTER':
      newState.showingRegister = !newState.showingRegister

    default:
      return newState
  }
}
