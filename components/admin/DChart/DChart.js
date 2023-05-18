import { DonutChart } from '@tremor/react';
import React, { useEffect, useState } from 'react'

function DChart({revenue}) {

  var [cities,setDisplayedCities]= useState(revenue.cities)

  useEffect(()=>{
    setDisplayedCities(revenue.cities)
  },[revenue])

    // const cities = [
    //     {
    //       name: "New York",
    //       sales: 9800,
    //     },
    //     {
    //       name: "London",
    //       sales: 4567,
    //     },
    //     {
    //       name: "Hong Kong",
    //       sales: 3908,
    //     },
    //     {
    //       name: "San Francisco",
    //       sales: 2400,
    //     },
    //     {
    //       name: "Singapore",
    //       sales: 1908,
    //     },
    //     {
    //       name: "Zurich",
    //       sales: 1398,
    //     },
    //   ];
  
      const valueFormatter = (number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;


  return (
    <DonutChart
            className="w-[75px] h-[75px] text-[9px]"
            data={cities}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
            />
  )
}

export default DChart