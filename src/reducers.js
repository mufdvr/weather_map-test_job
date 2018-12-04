import { combineReducers } from 'redux'
import { WeatherMap } from 'features'

export default combineReducers({
  weatherMap: WeatherMap.reducer
})
