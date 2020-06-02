const fetch = require("node-fetch");

const apiVariables= {
    url: 'https://cloud.iexapis.com/stable/stock',
    ticker: 'AAPL',
    core: 'book',
    token: '?token=pk_8bcad0d669594bdfb4fe4c79a8558d23'
}

const {url, ticker, core, token} = apiVariables
const apiUrl = `${url}/${ticker}/${core}${token}`

console.log(apiUrl)

fetch(apiUrl)
    .then(promise => promise.json())
    .then(data => console.log(data))