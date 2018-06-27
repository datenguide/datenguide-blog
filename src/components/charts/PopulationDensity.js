import React, { Component } from 'react'
import {
  VictoryLabel,
  VictoryChart,
  VictoryArea,
  VictoryLine,
  VictoryAxis
} from 'victory'
import _ from 'lodash'

import ChartContainer from '../ChartContainer'
import theme from '../theme'
import query from 'raw-loader!./PopulationDensity.graphql'

const dataHeaders = [
  { key: 'x', label: 'Jahr', type: 'number' },
  { key: 'y', label: 'Einwohner pro km²', type: 'number' }
]

const prepareData = ({ BEVSTD, FLC006 }) => {
  const populationPerYear = BEVSTD.ALTX20.INSGESAMT.GEST__years
  const area = FLC006

  return _(populationPerYear)
    .mapValues((value, id) => ({
      x: +id.substring(1),
      y: Math.round(value / area)
    }))
    .values()
    .sortBy(value => value.x)
    .value()
}

const PopulationDensity = ({ region, credits, comparison }) => {
  const displayData = {
    region: prepareData(region),
    comparison: prepareData(comparison)
  }

  return (
    <ChartContainer
      id={region.id}
      query={query}
      data={displayData.region}
      dataHeaders={dataHeaders}
      credits={credits}
    >
      <VictoryChart
        theme={theme}
        padding={{ top: 10, bottom: 20, left: 30, right: 40 }}
      >
        <VictoryArea
          data={displayData.comparison}
          style={{ data: { fill: '#dadada' } }}
        />

        <VictoryLabel
          datum={_.last(displayData.comparison)}
          text={comparison.name}
          dx={3}
          dy={3}
          style={{ fontSize: '7', fontFamily: 'inherit', fill: 'grey' }}
        />

        <VictoryLine data={displayData.region} />

        <VictoryLabel
          datum={_.last(displayData.region)}
          text={region.name}
          dx={3}
          style={{ fontSize: '7', fontFamily: 'inherit' }}
        />

        <VictoryAxis fixLabelOverlap tickFormat={val => val.toString()} />

        <VictoryAxis
          dependentAxis
          tickFormat={val => Intl.NumberFormat('de').format(val)}
        />
      </VictoryChart>
    </ChartContainer>
  )
}

export default PopulationDensity
