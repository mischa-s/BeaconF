const clone = require ('clone')

module.exports= reducer

  function reducer (state, action) {

    const newState = clone(state)
    switch (action.type) {

      case 'GET_ALL_FARMS':
      console.log ("Get all farms case: ", action.payload)
      newState.farms= action.payload
      console.log("New State Farms :", newState.farms);
      console.log("State Farms", state.farms);
      return newState

      case 'ADD_FARM_TO_FARMS':
      var farm= action.payload
      // var farmID = farm.id
        newState.farms[farmID] = farm
        return newState

      case 'DELETE_FARM_FROM_FARMS':
      var farm= action.payload
      var farmID = farm.id
        delete newState.farms[farmID]
        return newState

      default:
        return newState
    }
  }
