import { customFetch } from './common'

export const getCryptoList = (limit = 50, offset = 0) => {
  const url = `https://api.coinlore.net/api/tickers/?start=${offset}&limit=${limit}`

  return customFetch(url, 'GET')
    .then(response => response.data)
    .catch(e => {
      console.log('getCryptoList request Error: ', e)
    })
}

export const getCryptocurrency = (id) => {
  const url = `https://api.coinlore.net/api/ticker/?id=${id}`

  return customFetch(url, 'GET')
    .then(response => response[0])
    .catch(e => {
      console.log('getCryptocurrency request Error: ', e)
    })
}
