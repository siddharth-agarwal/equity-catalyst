const apiData = {
    url: 'https://cloud.iexapis.com/stable/stock',
    ticker: 'AAPL',
    core: 'book',
    token: '?pk_8bcad0d669594bdfb4fe4c79a8558d23'
}

const {url, ticker, core, token} = apiData
const apiUrl = `${url}/${ticker}/${core}${token}`

console.log(apiUrl)

fetch(apiUrl)
    .then( (data) => console.log(data.json()) )