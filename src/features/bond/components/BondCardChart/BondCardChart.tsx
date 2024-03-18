import type { ChartData } from "chart.js"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js"
import { Chart } from "react-chartjs-2"

import { type BondStatistic } from "../../type"

import cls from "./BondCardChart.module.css"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

interface BondCardChartProps {
  data: BondStatistic
}

export const BondCardChart = ({ data: { labels, data } }: BondCardChartProps) => {
  return (
    <Chart
      type="line"
      data={{
        labels,
        datasets: [
          {
            label: "Dataset 1",
            data,
            borderColor: {},
          },
        ],
      }}
    />
  )
}
