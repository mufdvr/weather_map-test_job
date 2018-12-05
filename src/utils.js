export const checkResponse = response =>
  new Promise((resolve, reject) => {
    response.ok ? response.json().then(json => resolve(json)) : response.json().then(json => reject(json))
  })