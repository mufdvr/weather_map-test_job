import * as React from 'react'

import { Provider } from 'react-redux'

import store from 'store'
import { WeatherMap } from 'features'

const App = () => {
  const { WeatherMapRoot } = WeatherMap.containers
  return (
    <Provider store={store}>
      <WeatherMapRoot />
    </Provider>
  )
}


export default App