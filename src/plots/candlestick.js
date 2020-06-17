import React from 'react'
import Chart from "react-google-charts";

function rearrange(rows, pos) {
  return rows.map(function(cols) {
    return pos.map(function(i) {
      return cols[i];
    });
  });
}

const Candlestick = (props) => {

        console.log(props.data)

        let dataArray = []
        
        if (Object.keys(props.data).length) {
          dataArray = props.data.map(obj => Object.values(obj).slice(0,5));
          dataArray.unshift(['Date','Low','Open','Close','High'])
          dataArray = rearrange(dataArray, [0, 4, 1, 2, 3]);
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