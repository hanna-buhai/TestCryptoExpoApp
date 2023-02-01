import { customFetch } from './common'

const cryptoListEndpoint = 'https://api.coinlore.net/api/tickers/'

export const getCryptoList = (limit = 50, offset = 0) => {
  const url = `${cryptoListEndpoint}?start=${offset}&limit=${limit}`

  return customFetch(url, 'GET')
    .then(response => response.data)
    .catch(e => {
      console.log('unsplashApi request Error: ', e)
    })
}
