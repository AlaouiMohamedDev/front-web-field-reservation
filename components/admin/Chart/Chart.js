import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

function Chart({val,color}) {
  const series = [val];
  const radialoptions = {
      chart: {
          type: 'radialBar',
          sparkline: {
              enabled: true
          }
      },
      dataLabels: {
          enabled: false
      },
      colors: [color],
      stroke: {
          lineCap: 'round'
      },
      plotOptions: {
          radialBar: {
              hollow: {
                  margin: 0,
                  size: '70%'
              },
              track: {
                  margin: 0,
              },
  
              dataLabels: {
                  name: {
                      show: false
                  },
                  value: {
                      offsetY: 5,
                      show: true
                  }
              }
          }
      }
  };
return(
  <React.Fragment>
      <ReactApexChart
        options={radialoptions}
        series={series}
        type="radialBar"
        height="75"
        width= "75"

      />
    </React.Fragment>
)
}

export default Chart