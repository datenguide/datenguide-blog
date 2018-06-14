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
import query from 'raw-loader!./PopulationOverTime.graphql'

const ageGroups = [
  { key: 'ALT000B03', min: 0, max: 3, desc: 'unter 3 Jahre' },
  { key: 'ALT003B06', min: 3, max: 6, desc: '3 bis 6 Jahre' },
  { key: 'ALT006B10', min: 6, max: 10, desc: '6 bis 10 Jahre' },
  { key: 'ALT010B15', min: 10, max: 15, desc: '10 bis 15 Jahre' },
  { key: 'ALT015B18', min: 15, max: 18, desc: '15 bis 18 Jahre' },
  { key: 'ALT018B20', min: 18, max: 20, desc: '18 bis 20 Jahre' },
  { key: 'ALT020B25', min: 20, max: 25, desc: '20 bis 25 Jahre' },
  { key: 'ALT025B30', min: 25, max: 30, desc: '25 bis 30 Jahre' },
  { key: 'ALT030B35', min: 30, max: 35, desc: '30 bis 35 Jahre' },
  { key: 'ALT035B40', min: 35, max: 40, desc: '35 bis 40 Jahre' },
  { key: 'ALT040B45', min: 40, max: 45, desc: '40 bis 45 Jahre' },
  { key: 'ALT045B50', min: 45, max: 50, desc: '45 bis 50 Jahre' },
  { key: 'ALT050B55', min: 50, max: 55, desc: '50 bis 55 Jahre' },
  { key: 'ALT055B60', min: 55, max: 60, desc: '55 bis 60 Jahre' },
  { key: 'ALT060B65', min: 60, max: 65, desc: '60 bis 65 Jahre' },
  { key: 'ALT065B75', min: 65, max: 75, desc: '65 bis 75 Jahre' },
  { key: 'ALT075UM', min: 75, max: 90, desc: 'über 75 Jahre' }
]

const prepareDisplayData = data =>
  ageGroups.map(({ key, min, max, desc }) => ({
    1995: parseInt(data[key].GEST__years._1995),
    2015: parseInt(data[key].GEST__years._2015),
    min,
    max,
    desc
  }))

const PopulationOverTime = ({ data }) => {
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
    <ChartContainer query={query} data={displayData}>
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
          name="1995"
          data={displayData}
          x={xValue}
          y={d => d[1995]}
          interpolation="step"
          style={{ data: { fill: '#dadada' } }}
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
