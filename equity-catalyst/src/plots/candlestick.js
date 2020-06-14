import React, { Component } from 'react'
import Chart from "react-google-charts";

class Candlestick extends Component {
    render() {
        return <Chart
        width={'100%'}
        height={350}
        chartType="CandlestickChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['day', 'a', 'b', 'c', 'd'],
          ['Mon', 20, 28, 38, 45],
          ['Tue', 31, 38, 55, 66],
          ['Wed', 50, 55, 77, 80],
          ['Thu', 77, 77, 66, 50],
          ['Fri', 68, 66, 22, 15],
        ]}
        options={{
          title: 'Daily Candlestick',
          titleTextStyle: {
              color: 'white',  
              fontSize: 28  // any HTML string color ('red', '#cc00cc')
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
        rootProps={{ 'data-testid': '2' }}
      />
    }
}

export default Candlestick;