import * as types from './actionTypes'

const initialState = {
  fetching: false,
  payload: [],
  errors: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CITY + types.PENDING:
      return {
        ...state,
        errors: {},
        fetching: true
      }
    case types.ADD_CITY + types.SUCCESS:
      return {
        ...state,
        fetching: false,
        payload: [...state.payload, action.payload]
      } 
    case types.ADD_CITY + types.FAILURE:
      return {
        ...state,
        fetching: false,
        errors: action.errors
      }
    default:
      return state  
  } 
}
