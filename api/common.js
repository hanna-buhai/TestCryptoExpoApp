export const customFetch = (url, method) => {
  let status
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
  return fetch(url, { method, headers })
    .then(response => {
      status = response.status
      if (status === 403) {
        return {}
      } else {
        return response.json()
      }
    })
    .then(response => {
      if (status >= 200 && status < 304) {
        return response
      } else {
        return Promise.reject('api request error')
      }
    })
    .catch(error => {
      Promise.reject(error)
    })
}
