import React, { Component } from 'react'
import Chart from "react-google-charts";

class Bar extends Component {
    render() {
        return <Chart
        width={'100%'}
        height={350}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        options={{
            title: 'Daily Volume',
            titleTextStyle: {
                color: 'white',  
                fontSize: 28  // any HTML string color ('red', '#cc00cc')
            },
            backgroundColor: '#000000',
            chartArea: { width: '75%' },
            legend:{position:'none'} 
        }}
        data={[
          ['', ''],
          ['Day 1', 8175000],
          ['Day 2', 3792000],
          ['Day 3', 2695000],
          ['Day 4', 2099000],
          ['Day 5', 1526000],
        ]}
        // For tests
        rootProps={{ 'data-testid': '1' }}
      />
    }
}

export default Bar;