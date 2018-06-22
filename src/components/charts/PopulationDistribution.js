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
  { key: '2011', label: 'Jahr 2011', type: 'number' },
  { key: '2015', label: 'Jahr 2015', type: 'number' }
]

const ageGroups = [
  {
    min: 0,
    max: 10,
    desc: 'unter 10 Jahre',
    keys: ['ALT000B03', 'ALT003B06', 'ALT006B10']
  },
  {
    min: 10,
    max: 20,
    desc: '10 bis 20 Jahre',
    keys: ['ALT010B15', 'ALT015B18', 'ALT018B20']
  },
  {
    min: 20,
    max: 30,
    desc: '15 bis 30 Jahre',
    keys: ['ALT020B25', 'ALT025B30']
  },
  {
    min: 30,
    max: 40,
    desc: '30 bis 40 Jahre',
    keys: ['ALT030B35', 'ALT035B40']
  },
  {
    min: 40,
    max: 50,
    desc: '40 bis 50 Jahre',
    keys: ['ALT040B45', 'ALT045B50']
  },
  {
    min: 50,
    max: 60,
    desc: '50 bis 60 Jahre',
    keys: ['ALT050B55', 'ALT055B60']
  },
  {
    min: 60,
    max: 70,
    desc: '60 bis 70 Jahre',
    keys: ['ALT060B65', 'ALT065B70']
  },
  {
    min: 70,
    max: 80,
    desc: '70 bis 80 Jahre',
    keys: ['ALT070B75', 'ALT075B80']
  },
  {
    min: 80,
    max: 90,
    desc: '80 bis 90 Jahre',
    keys: ['ALT080B85', 'ALT085B90']
  },
  { min: 90, max: 100, desc: 'über 90 Jahre', keys: ['ALT090UM'] }
]

const prepareDisplayData = data => {
  debugger
  return ageGroups.map(({ keys, min, max, desc }) => ({
    2011: keys.reduce((sum, key) => sum + data[key].GEST__years._2011, 0),
    2015: keys.reduce((sum, key) => sum + data[key].GEST__years._2015, 0),
    min,
    max,
    desc
  }))
}

const PopulationOverTime = ({ data }) => {
  const xValue = d => (d.max - d.min) / 2 + d.min
  const tip = d => `${d.desc}:\n${numFormat(d[d.childName])} (${d.childName})`

  const numFormat = Intl.NumberFormat('de').format
  const displayData = prepareDisplayData(data.BEVSTD.ALTX21)
  const lastDatum = _.last(displayData)
  const seriesLabels = {
    2011: { x: xValue(lastDatum), y: lastDatum[2011] },
    2015: { x: xValue(lastDatum), y: lastDatum[2015] }
  }

  return (
    <ChartContainer
      id={data.id}
      query={query}
      data={displayData}
      dataHeaders={dataHeaders}
    >
      <VictoryChart
        theme={theme}
        padding={{ top: 10, bottom: 40, left: 60, right: 40 }}
        containerComponent={
          <VictoryVoronoiContainer
            labelComponent={<VictoryTooltip dy={2} orientation="bottom" />}
            labels={tip}
          />
        }
      >
        <VictoryArea
          name="2011"
          data={displayData}
          x={xValue}
          y={d => d[2011]}
          style={{ data: { fill: '#dadada' } }}
          interpolation="step"
        />

        <VictoryLabel
          datum={seriesLabels[2011]}
          text="2011"
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
