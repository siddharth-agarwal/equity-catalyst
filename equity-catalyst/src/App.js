import React from 'react';

const fetch = require("node-fetch");

const apiVariables= {
    url: 'https://cloud.iexapis.com/stable/stock',
    ticker: 'AAPL',
    core: 'book',
    token: '?token=pk_8bcad0d669594bdfb4fe4c79a8558d23'
}

const {url, ticker, core, token} = apiVariables
const apiUrl = `${url}/${ticker}/${core}${token}`

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input 
            type = "text"
            className = "search-bar"
            placeholder="Search your ticker..."
            />
        </div>
      </main>
    </div>
  );
}

export default App;
