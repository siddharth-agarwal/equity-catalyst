import React from 'react'
import Chart from 'react-google-charts'

const Bar = (props) => {
  let dataArray = []
  if (Object.keys(props.data).length) {
    props.data.forEach(function (a) {
      dataArray.push([new Date(a.date), a.volume])
    })
    dataArray.unshift(['Date', 'Volume'])
  }

  return <Chart
    width={'100%'}
    height={400}
    chartType="ColumnChart"
    loader={<div>Loading Chart</div>}
    data={dataArray}
    formatters={[
      {
        type: 'DateFormat',
        column: 1,
        options: {
          formatType: 'short',
        },
      }
    ]}
    options={{
      title: 'Daily Traded Volume (Past 30 Days)',
      titleTextStyle: {
        color: 'black',
        fontSize: 28
      },
      vAxis: {
        title: 'Traded Volume',
        textStyle: {
          color: 'white'
        }
      },
      hAxis: {
        title: 'Date',
        format : 'M/d',
        gridlines: {color: 'none'},
        textStyle: {
          color: 'white'
        }
      },
      legend: 'none',
      backgroundColor: '#000000',
      colors: ['lightblue'],
      bar: {
        groupWidth: '50%'
      }
    }}
    rootProps={{ 'data-testid': '1' }}
  />
}

export default Bar
