import React from 'react';
import logo from './logo.svg';
import './App.css';

const fetch = require("node-fetch");

const apiVariables= {
    url: 'https://cloud.iexapis.com/stable/stock',
    ticker: 'AAPL',
    core: 'book',
    token: '?token=pk_8bcad0d669594bdfb4fe4c79a8558d23'
}

const {url, ticker, core, token} = apiVariables
const apiUrl = `${url}/${ticker}/${core}${token}`

fetch(apiUrl)
    .then(data => data.json()) //prints only the ticker
    .then(data => {
        data.trades.forEach(data => { //prints last 20 trade prices
            console.log(data.price)
        });

        console.log(data.quote.symbol) //prints ticker
    })


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        data.quote.symbol 
      </header>
    </div>
  );
}

export default App;
