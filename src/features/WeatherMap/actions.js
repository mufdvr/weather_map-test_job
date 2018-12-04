import * as api from './api'
import * as types from './actionTypes'
import fetch from 'isomorphic-fetch'

const DEFAULT_ERROR_MSG = ['Что то пошло не так...']

const checkResponse = response =>
  new Promise((resolve, reject) => {
    switch (response.status) {
      case 200:
        response.json().then(json => resolve(json))
        break
      default:
        reject({
          msg: DEFAULT_ERROR_MSG
        })
    }
  })


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
    .catch(errors => {
      if (!errors.msg) errors = {
        msg: DEFAULT_ERROR_MSG
      }
      dispatch({
        type: types.ADD_CITY + types.FAILURE,
        errors
      })
    })


}