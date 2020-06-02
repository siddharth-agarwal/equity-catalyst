const apiData = {
    url: 'https://cloud.iexapis.com/stable/stock',
    ticker: 'AAPL',
    data: 'book',
    token: '?pk_8bcad0d669594bdfb4fe4c79a8558d23'
}

const {url, ticker, data, token} = apiData
const apiUrl = `${url}/${ticker}/${data}${token}`

console.log(apiUrl)