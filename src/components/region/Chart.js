import React from 'react'
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory'

import DataTable from '../../components/DataTable'
import theme from '../../components/theme'

export default function RegionMeta({ data }) {
  const popData = _(data)
    .mapValues((value, id) => ({
      x: id.substring(1),
      y: parseInt(value, 10)
    }))
    .values()
    .sortBy(value => value.x)
    .value()

  return (
    <div className="chart-container">
      <DataTable columnLabels={['Jahr', 'Einwohner']} data={popData} />

      <VictoryChart
        theme={theme}
        padding={{ top: 20, bottom: 40, left: 60, right: 40 }}
      >
        <VictoryBar data={popData} />
        <VictoryAxis fixLabelOverlap />
        <VictoryAxis
          dependentAxis
          tickFormat={val => Intl.NumberFormat('de').format(val)}
        />
      </VictoryChart>
    </div>
  )
}
