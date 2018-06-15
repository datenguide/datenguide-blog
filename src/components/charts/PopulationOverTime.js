import React, { Component } from 'react'
import { VictoryChart, VictoryArea, VictoryAxis, VictoryTheme } from 'victory'
import _ from 'lodash'

import ChartContainer from '../ChartContainer'
import theme from '../theme'
import query from 'raw-loader!./PopulationOverTime.graphql'

const dataHeaders = [
  { key: 'x', label: 'Jahr' },
  { key: 'y', label: 'Einwohner' }
]

const PopulationOverTime = ({ data }) => {
  const displayData = _(data.BEVSTD.ALTX20.INSGESAMT.GEST__years)
    .mapValues((value, id) => ({
      x: id.substring(1),
      y: parseInt(value, 10)
    }))
    .values()
    .sortBy(value => value.x)
    .value()

  return (
    <ChartContainer query={query} data={displayData} dataHeaders={dataHeaders}>
      <VictoryChart
        theme={theme}
        padding={{ top: 20, bottom: 40, left: 60, right: 40 }}
      >
        <VictoryArea data={displayData} />
        <VictoryAxis fixLabelOverlap />
        <VictoryAxis
          dependentAxis
          tickFormat={val => Intl.NumberFormat('de').format(val)}
        />
      </VictoryChart>
    </ChartContainer>
  )
}

export default PopulationOverTime
