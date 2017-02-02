const clone = require ('clone')

module.exports= reducer

  function reducer (state, action) {

    const newState = clone(state)
    switch (action.type) {

      case 'GET_ALL_FARMS':
        newState.farms= action.payload
        return newState
      case 'LOGIN':
        newState.loggedIn = action.payload
      case 'SHOWING_LOGIN':
        newState.showingLogin = !newState.showingLogin

      default:
        return newState
    }
  }
