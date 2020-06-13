import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class Plots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    background: '#f4f4f4',
                    foreColor: '#333'
                },
                fill: {
                    colors: ["#F44336"]
                  },
                  dataLabels: {
                    enabled: false
                  },
                  title: {
                    text: "Daily Candle Chart",
                    align: "center",
                    margin: 20,
                    offsetY: 20,
                    style: {
                      fontSize: "25px"
                    }
                },
                candlestick: {
                    colors: {
                      wick: {
                        useFillColor: true,
                      }
                    }
                }
            },
            series: [
                {
                    name: 'Daily Candles',
                    data: [
                        [1, 6593.34, 6600, 6582.63, 6600], 
                        [2, 6595.16, 6604.76, 6590.73, 6593.86]
                      ]
                }],
        }
    };
    render() {
        return <Chart
        options={this.state.options}
        series={this.state.series}
        type="candle"
        height="450"
        width="100%"
        />
    }
}

export default Plots;