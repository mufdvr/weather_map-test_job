import * as React from 'react'

import { Provider } from 'react-redux'

import store from 'store'
import { WeatherMap } from 'features'

const App = () =>
  <Provider store={store}>
    { WeatherMap.components.Layout() }
  </Provider>


export default App