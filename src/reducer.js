const clone = require ('clone')

module.exports= reducer

  function reducer (state, action) {

    const newState = clone(state)
    switch (action.type) {

      case 'GET_ALL_FARMS':
        newState.farms= action.payload
        console.log('New State', newState);
        return newState

      default:
        return newState
    }
  }
