const { REACT_APP_API_KEY } = process.env
export const weather = `http://api.openweathermap.org/data/2.5/weather?q={city}&APPID=${REACT_APP_API_KEY}`