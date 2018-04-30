import React, { Component } from 'react'
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory'
import _ from 'lodash'

import ChartContainer from '../ChartContainer'
import theme from '../theme'
import query from 'raw-loader!./PopulationOverTime.graphql'

const PopulationOverTime = ({ data }) => {
  const processedData = _(data.BEVSTD.ALTX20.INSGESAMT.GEST__years)
    .mapValues((value, id) => ({
      x: id.substring(1),
      y: parseInt(value, 10)
    }))
    .values()
    .sortBy(value => value.x)
    .value()

  return (
    <ChartContainer query={query} data={processedData}>
      <VictoryChart
        theme={theme}
        padding={{ top: 20, bottom: 40, left: 60, right: 40 }}
      >
        <VictoryBar data={processedData} />
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
