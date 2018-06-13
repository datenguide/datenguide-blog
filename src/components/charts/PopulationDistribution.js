import React, { Component } from 'react'
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryArea,
  VictoryLine,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip
} from 'victory'
import _ from 'lodash'

import ChartContainer from '../ChartContainer'
import theme from '../theme'
import query from 'raw-loader!./PopulationOverTime.graphql'

const ageGroup = [
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

const mapPerYear = ({ key, min, max, desc }, year, popData) => ({
  x: (max - min) / 2 + min,
  y: parseInt(popData[key].GEST__years[`_${year}`]),
  year,
  min,
  max,
  desc
})

const PopulationOverTime = ({ data }) => {
  const popData = data.BEVSTD.ALTX20
  const d1995 = ageGroup.map(d => mapPerYear(d, 1995, popData))
  const d2015 = ageGroup.map(d => mapPerYear(d, 2015, popData))
  const numberFormat = Intl.NumberFormat('de').format
  const maxY = Math.max(...d2015.map(d => d.y), ...d1995.map(d => d.y))
  const tooltipOrientation = d => (d.y < maxY * 0.75 ? 'top' : 'bottom')
  const tooltipLabel = d => `${d.desc}:\n${numberFormat(d.y)} (${d.year})`

  return (
    <ChartContainer query={query} data={d1995}>
      <VictoryChart
        theme={theme}
        padding={{ top: 10, bottom: 40, left: 60, right: 40 }}
        containerComponent={
          <VictoryVoronoiContainer
            labels={tooltipLabel}
            labelComponent={
              <VictoryTooltip dy={2} orientation={tooltipOrientation} />
            }
          />
        }
      >
        <VictoryArea
          interpolation="step"
          data={d1995}
          style={{ data: { fill: '#dadada' } }}
        />
        <VictoryLine interpolation="step" data={d2015} />
        <VictoryAxis fixLabelOverlap tickFormat={d => `${d} Jahre`} />
        <VictoryAxis dependentAxis tickFormat={numberFormat} />
      </VictoryChart>
    </ChartContainer>
  )
}

export default PopulationOverTime
