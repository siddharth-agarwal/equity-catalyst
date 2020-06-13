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
                    wick: {
                      useFillColor: true,
                    }
                },
                grid: {
                    yaxis: {
                        lines: {
                          show: false
                        }
                    },
                    xaxis: {
                        lines: {
                          show: false
                        }
                    }
                }
            },
            series: [
                {
                    name: 'Daily Candles',
                    data: [{
                        x: '1',
                        y: [51.98, 56.29, 51.59, 53.85]
                      },
                      {
                        x: '2',
                        y: [53.66, 54.99, 51.35, 52.95]
                      },
                      {
                        x: '3',
                        y: [53.66, 54.99, 51.35, 52.95]
                      }]
                }],
        }
    };
    render() {
        return <Chart
        options={this.state.options}
        series={this.state.series}
        type="candlestick"
        height="450"
        width="100%"
        />
    }
}

export default Plots;