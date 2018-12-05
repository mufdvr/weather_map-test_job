import fetch from 'isomorphic-fetch'

import * as api from './api'
import * as types from './actionTypes'
import { checkResponse } from 'utils'

const DEFAULT_ERROR_MSG = 'Unknown error'

export const addCity = city => dispatch => {

  const options = {
    method: 'GET'
  }

  dispatch({
    type: types.ADD_CITY + types.PENDING
  })

  fetch(api.weather.replace('{city}', city), options)
    .then(response => checkResponse(response)
      .then(payload => dispatch({
        type: types.ADD_CITY + types.SUCCESS,
        payload
      }))
    )
    .catch(error => {
      if (!error.message) error = {
        message: DEFAULT_ERROR_MSG
      }
      dispatch({
        type: types.ADD_CITY + types.FAILURE,
        error
      })
    })
}

export const deleteCity = index => ({
  type: types.DELETE_CITY,
  index
})

export const sortByCity = () => ({
  type: types.SORT_BY_CITY
})