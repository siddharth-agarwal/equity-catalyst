import React, { useState } from 'react';

const apiVariables= {
  url: 'https://cloud.iexapis.com/stable/stock',
  request: 'book',
  token: '?token=pk_8bcad0d669594bdfb4fe4c79a8558d23'
}


function App() {

  var d = new Date();
  var FIVE_PM = 17, FOUR_AM = 4;
  var is_night = (d.getHours() > FIVE_PM || d.getHours < FOUR_AM)

  const [ticker, setTicker] = useState('')
  const [returnData, setReturnData] = useState({})
  const search = evt => {
    if (evt.key === "Enter") {
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
    <div className={((is_night) ? 'App_night' : 'App')}>
      <main>
      <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter a ticker to lookup..."
            onChange={e => setTicker(e.target.value)}
            value={ticker}
            onKeyPress={search}
          />
      </div>
      {(typeof returnData.quote != "undefined") ? (
        <div>
          <table className="data-box">
            <thead>
              <tr>
                <th colSpan="2">{returnData.quote.symbol}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="symbolData">
                <td>Company</td>
                <td>{returnData.quote.companyName}</td>
              </tr>
              <tr className="symbolData">
                <td>Closing Price</td>
                <td>{returnData.quote.close != null ? "$"+returnData.quote.close : "n/a"}; (Source: {returnData.quote.closeSource})</td>
              </tr>
              <tr className="symbolData">
                <td>Latest Price</td>
                <td>${returnData.quote.latestPrice}; (Source: {returnData.quote.latestSource})</td>
              </tr>
              <tr className="symbolData">
                <td>Primary Listed Exchange</td>
                <td>{returnData.quote.primaryExchange}</td>
              </tr>
            </tbody>
          </table>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
