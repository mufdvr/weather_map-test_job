import * as types from './actionTypes'

const initialState = {
  fetching: false,
  payload: [],
  error: {},
  nameOrderBy: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CITY + types.PENDING: {
      return {
        ...state,
        error: {},
        fetching: true
      }
    }
    case types.ADD_CITY + types.SUCCESS: {
      return {
        ...state,
        fetching: false,
        payload: [...state.payload, action.payload]
      }
    }
    case types.ADD_CITY + types.FAILURE: {
      return {
        ...state,
        fetching: false,
        error: action.error
      }
    }
    case types.DELETE_CITY: {
      state.payload.splice(action.index, 1)
      return {
        ...state,
        error: {},
        payload: [...state.payload]
      }
    }
    case types.SORT_BY_CITY: {
      const { nameOrderBy } = state
      return {
        ...state,
        error: {},
        nameOrderBy: nameOrderBy * -1,
        payload: [...state.payload.sort((a, b) => {
          if (a.name < b.name) return nameOrderBy * -1
          if (a.name > b.name) return nameOrderBy
          return 0
        })]
      }
    }
    default:
      return state
  }
}

