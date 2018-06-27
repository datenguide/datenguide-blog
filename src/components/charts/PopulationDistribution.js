import React, { Component } from 'react'
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryArea,
  VictoryLine,
  VictoryAxis,
  VictoryLabel,
  VictoryTooltip
} from 'victory'
import _ from 'lodash'

import ChartContainer from '../ChartContainer'
import theme from '../theme'
import query from 'raw-loader!./PopulationDistribution.graphql'

const dataHeaders = [
  { key: 'desc', label: 'Altersgruppe', type: 'string' },
  { key: '1995', label: 'Jahr 1995', type: 'number' },
  { key: '2015', label: 'Jahr 2015', type: 'number' }
]

const ageGroups = [
  {
    min: 0,
    max: 15,
    desc: 'unter 15 Jahre',
    keys: ['ALT000B03', 'ALT003B06', 'ALT006B10', 'ALT010B15']
  },
  {
    min: 15,
    max: 30,
    desc: '15 bis 30 Jahre',
    keys: ['ALT015B18', 'ALT018B20', 'ALT020B25', 'ALT025B30']
  },
  {
    min: 30,
    max: 45,
    desc: '30 bis 45 Jahre',
    keys: ['ALT030B35', 'ALT035B40', 'ALT040B45']
  },
  {
    min: 45,
    max: 60,
    desc: '45 bis 60 Jahre',
    keys: ['ALT045B50', 'ALT050B55', 'ALT055B60']
  },
  {
    min: 60,
    max: 75,
    desc: '60 bis 75 Jahre',
    keys: ['ALT060B65', 'ALT065B75']
  },
  { min: 75, max: 90, desc: 'über 75 Jahre', keys: ['ALT075UM'] }
]

const prepareDisplayData = data =>
  ageGroups.map(({ keys, min, max, desc }) => ({
    1995: keys.reduce((sum, key) => sum + data[key].GEST__years._1995, 0),
    2015: keys.reduce((sum, key) => sum + data[key].GEST__years._2015, 0),
    min,
    max,
    desc
  }))

const PopulationOverTime = ({ data, credits }) => {
  const xValue = d => (d.max - d.min) / 2 + d.min
  const tip = d => `${d.desc}:\n${numFormat(d[d.childName])} (${d.childName})`

  const numFormat = Intl.NumberFormat('de').format
  const displayData = prepareDisplayData(data.BEVSTD.ALTX20)
  const lastDatum = _.last(displayData)
  const seriesLabels = {
    1995: { x: xValue(lastDatum), y: lastDatum[1995] },
    2015: { x: xValue(lastDatum), y: lastDatum[2015] }
  }

  return (
    <ChartContainer
      id={data.id}
      query={query}
      data={displayData}
      dataHeaders={dataHeaders}
      credits={credits}
    >
      <VictoryChart
        theme={theme}
        padding={{ top: 20, bottom: 20, left: 40, right: 20 }}
        containerComponent={
          <VictoryVoronoiContainer
            labelComponent={<VictoryTooltip dy={2} orientation="bottom" />}
            labels={tip}
          />
        }
      >
        <VictoryArea
          name="1995"
          data={displayData}
          x={xValue}
          y={d => d[1995]}
          style={{ data: { fill: '#dadada' } }}
          interpolation="step"
        />

        <VictoryLabel
          datum={seriesLabels[1995]}
          text="1995"
          dx={3}
          style={{ fontSize: '7', fontFamily: 'inherit', fill: 'grey' }}
        />

        <VictoryLine
          name="2015"
          data={displayData}
          x={xValue}
          y={d => d[2015]}
          interpolation="step"
        />

        <VictoryLabel
          datum={seriesLabels[2015]}
          text="2015"
          dx={3}
          style={{ fontSize: '7', fontFamily: 'inherit' }}
        />

        <VictoryAxis fixLabelOverlap tickFormat={d => `${d} Jahre`} />
        <VictoryAxis dependentAxis tickFormat={numFormat} />
      </VictoryChart>
    </ChartContainer>
  )
}

export default PopulationOverTime
