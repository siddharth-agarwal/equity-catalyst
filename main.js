const fetch = require("node-fetch");

const apiVariables= {
    url: 'https://cloud.iexapis.com/stable/stock',
    ticker: 'AAPL',
    request: 'book',
    token: '?token=pk_8bcad0d669594bdfb4fe4c79a8558d23'
}

const {url, ticker, request, token} = apiVariables
const apiUrl = `${url}/${ticker}/${request}${token}`

console.log(apiUrl)

fetch(apiUrl)
    .then(data => data.json()) //prints only the ticker
    .then(data => {
        
        data.trades.forEach(data => { //prints last 20 trade prices
            console.log(data.price)
        });

        console.log(data.quote.symbol) //prints ticker
    })
