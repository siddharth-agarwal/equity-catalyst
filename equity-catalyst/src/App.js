import React, { useState } from 'react';

const apiVariables= {
  url: 'https://cloud.iexapis.com/stable/stock',
  request: 'book',
  token: '?token=pk_8bcad0d669594bdfb4fe4c79a8558d23'
}


function App() {

  var d = new Date();
  var hours = d.getHours();
  var five_pm = 17;

  const [ticker, setTicker] = useState('')
  const [returnData, setReturnData] = useState({})
  const search = evt => {
    if (evt.key == "Enter") {
      const apiUrl = `${apiVariables.url}/${ticker}/${apiVariables.request}${apiVariables.token}`

      fetch(apiUrl)
        .then(data => data.json()) 
        .then(data => {
          setReturnData(data)
          setTicker('')
        })
      }
  }

  return (
    <div className={((hours >= five_pm) ? 'App_night' : 'App')}>
      <main>
      <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setTicker(e.target.value)}
            value={ticker}
            onKeyPress={search}
          />
      </div>
      {(typeof returnData.quote != "undefined") ? (
        <div>
          <div className="data-box">
            <div className="symbolName">{returnData.quote.symbol}</div>
            <div className="closePrice">{returnData.quote.close}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
