import React from 'react'
import Chart from "react-google-charts";

const Candlestick = (props) => {

        console.log(props.data)

        let dataArray = []
        
        if (Object.keys(props.data).length) {
                 props.data.forEach(function (a) {
            dataArray.push([a.date, a.low, a.open, a.close, a.high])
          })
          dataArray.unshift(['Date','Low','Open','Close','High'])
        }
      
        return <Chart
          width={'100%'}
          height={350}
          chartType="CandlestickChart"
          loader={<div>Loading Chart</div>}
          data={ dataArray }   
          options={{
            title: 'Daily Candlestick',
            titleTextStyle: {
                color: 'white',  
                fontSize: 28  // any HTML string color ('red', '#cc00cc')
            },
            vAxis: {
              textStyle: {
                color: 'white'
              }
            },
            hAxis: {
              textStyle: {
                color: 'white'
              }
            },
            legend: 'none',
            backgroundColor: '#000000',
            bar: { groupWidth: '50%' },
            candlestick: {
              fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
              risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // green
            },
            colors: ['white']
          }}
          rootProps={{ 'data-testid': '1' }}
        />
    }

export default Candlestick;