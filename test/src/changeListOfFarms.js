const test = require('tape')
const freeze = require ('deep-freeze')
const reducer = require ('../../src/reducer')

test('add farm to list of farms', t => {
    //arrange

    const state = {
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
    freeze(state)


    //act
    const action = {
      type: 'ADD_FARM_TO_FARMS',
      payload:{
        id: 3,
        name: 'Forest Row',
        location: 'England',
        type: 'Small Holding'
      }
    }

    const expectedState = {
      farms: {
          1:{
            id: 1,
            name: 'Skilleby',
            location: 'Sweden',
            type: 'Small Holding'
          },

          2:{
            id: 2,
            name: 'Triple H',
            location: 'Canada',
            type: 'Cattle Ranch'
          },
          3:{
            id: 3,
            name: 'Forest Row',
            location: 'England',
            type: 'Small Holding'
          }
      }
    }

    const newState = reducer(state, action)

    //assert

    t.deepEqual(newState, expectedState, 'should add the new farm ')

    t.end()
})

test('delete farm from list of farms', t => {
    //arrange

    const state = {
      farms: {
        1:{
          id: 1,
          name: 'Skilleby',
          location: 'Sweden',
          type: 'Small Holding'
        },

        2:{
          id: 2,
          name: 'Triple H',
          location: 'Canada',
          type: 'Cattle Ranch'
        },
        3:{
          id: 3,
          name: 'Forest Row',
          location: 'England',
          type: 'Small Holding'
        }
      }
    }

    freeze(state)


    //act
    const action = {
      type: 'DELETE_FARM_FROM_FARMS',
      payload:{
        id: 3,
        name: 'Forest Row',
        location: 'England',
        type: 'Small Holding'
      }
    }

    const expectedState = {
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

    const newState = reducer(state, action)

    //assert

    t.deepEqual(newState, expectedState, 'should add the new farm ')

    t.end()
})
