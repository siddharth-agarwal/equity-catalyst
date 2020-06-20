import React, { useState } from 'react'
import Candlestick from './plots/candlestick'
import Bar from './plots/bar'

const apiVariables= {
  url: 'https://cloud.iexapis.com/stable/stock',
  request: 'book',
  token: '?token=pk_8bcad0d669594bdfb4fe4c79a8558d23',
  range: '1m'
}

function App() {
  
  var d = new Date();
  var FIVE_PM = 17, FOUR_AM = 4;
  var is_night = (d.getHours() > FIVE_PM || d.getHours() < FOUR_AM)

  const [ticker, setTicker] = useState('')
  const [baseData, setBaseData] = useState({})
  const [historicalData, setHistoricalData] = useState({})

  const search = evt => {
    if (evt.key === "Enter") {
      
      const baseDataCall = `${apiVariables.url}/${ticker}/${apiVariables.request}${apiVariables.token}`
      fetch(baseDataCall)
        .then(tickerData => tickerData.json())
        .then(tickerData => {
          setBaseData(tickerData)
          setTicker('')
        })
      
      
      const historicalDataCall = `${apiVariables.url}/${ticker}/chart/${apiVariables.range}${apiVariables.token}`
      fetch(historicalDataCall)
        .then(tickerData => tickerData.json())
        .then(tickerData => {
          setHistoricalData(tickerData)
        })
      }
  }

  return (
    <div className={((is_night) ? 'App_night' : 'App')}>
      <main>
      <div className = "Daily">
        <Candlestick
          data = { historicalData } />
      </div> 
      <div className = "Volume">
        <Bar
          data = { historicalData } />
      </div>
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
      {(typeof baseData.quote != "undefined") ? (
        <div className="data-box">
          <table>
            <thead>
              <tr>
                <th colSpan="2">{baseData.quote.symbol}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="symbolData">
                <td>Company</td>
                <td>{baseData.quote.companyName}</td>
              </tr>
              <tr className="symbolData">
                <td>Latest Price ({baseData.quote.latestSource})</td>
                <td>${baseData.quote.latestPrice}</td>
              </tr>
              <tr className="symbolData">
                <td>Previous Close</td>
                <td>{baseData.quote.previousClose != null ? "$"+baseData.quote.previousClose : "n/a"}</td>
              </tr>
              <tr className="symbolData">
                <td>% Change</td>
                <td>{baseData.quote.changePercent != null ? baseData.quote.changePercent*100+'%' : "n/a"}</td>
              </tr>
              <tr className="symbolData">
                <td>Traded Volume (IEX)</td>
                <td>{baseData.quote.iexVolume != null ? baseData.quote.iexVolume : "n/a"}</td>
              </tr>
              <tr className="symbolData">
                <td>Avg Daily Traded Volume</td>
                <td>{baseData.quote.avgTotalVolume != null ? baseData.quote.avgTotalVolume : "n/a"}</td>
              </tr>
              <tr className="symbolData">
                <td>Primary Listed Exchange</td>
                <td>{baseData.quote.primaryExchange}</td>
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
