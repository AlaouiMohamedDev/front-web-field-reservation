import Map from "../components/Map"
import Chart from "../components/admin/Chart"
import { Card, DonutChart, Title } from "@tremor/react";


function maptest() {

    const cities = [
        {
          name: "Marrakech",
          sales: 100,
        },
        {
            name: "Casablanca",
            sales: 200,
          }
      ];

      const valueFormatter = (number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

    return (
        // <Map />
        <>

            <DonutChart
            className="mt-6"
            data={cities}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={["green","blue"]}
            />

            <Chart />
        </>
        
    )
}

export default maptest