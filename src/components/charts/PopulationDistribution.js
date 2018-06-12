import React, { Component } from 'react'
import {
  VictoryChart,
  VictoryArea,
  VictoryLine,
  VictoryAxis,
  VictoryTheme
} from 'victory'
import _ from 'lodash'

import ChartContainer from '../ChartContainer'
import theme from '../theme'
import query from 'raw-loader!./PopulationOverTime.graphql'

const PopulationOverTime = ({ data }) => {
  const data1915 = _(data.BEVSTD.ALTX20)
    .mapValues((value, id) => ({
      x: id,
      y: parseInt(value.GEST__years._1995, 10)
    }))
    .values()
    .sortBy(value => value.x)
    .value()

  const data2015 = _(data.BEVSTD.ALTX20)
    .mapValues((value, id) => ({
      x: id,
      y: parseInt(value.GEST__years._2015, 10)
    }))
    .values()
    .sortBy(value => value.x)
    .value()

  return (
    <ChartContainer query={query} data={data1915}>
      <VictoryChart
        theme={theme}
        padding={{ top: 20, bottom: 40, left: 60, right: 40 }}
      >
        <VictoryArea interpolation="step" data={data2015} />
        <VictoryLine interpolation="step" data={data1915} />
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
