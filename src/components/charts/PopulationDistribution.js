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

const popGroups = [
  { key: 'ALT003B06', label: '03 bis 06' },
  { key: 'ALT006B10', label: '06 bis 10' },
  { key: 'ALT010B15', label: '10 bis 15' },
  { key: 'ALT015B18', label: '15 bis 18' },
  { key: 'ALT018B20', label: '18 bis 20' },
  { key: 'ALT020B25', label: '20 bis 25' },
  { key: 'ALT025B30', label: '25 bis 30' },
  { key: 'ALT030B35', label: '30 bis 35' },
  { key: 'ALT035B40', label: '35 bis 40' },
  { key: 'ALT040B45', label: '40 bis 45' },
  { key: 'ALT045B50', label: '45 bis 50' },
  { key: 'ALT050B55', label: '50 bis 55' },
  { key: 'ALT055B60', label: '55 bis 60' },
  { key: 'ALT060B65', label: '60 bis 65' },
  { key: 'ALT065B75', label: '65 bis 75' },
  { key: 'ALT075UM', label: 'über 75' }
]

const PopulationOverTime = ({ data }) => {
  const popData = data.BEVSTD.ALTX20

  const data1915 = popGroups.map(({ key, label }) => ({
    x: label,
    y: parseInt(popData[key].GEST__years._1995),
    year: 1995
  }))

  const data2015 = popGroups.map(({ key, label }) => ({
    x: label,
    y: parseInt(popData[key].GEST__years._2015),
    year: 2005
  }))

  const numberFormat = Intl.NumberFormat('de').format

  return (
    <ChartContainer query={query} data={data1915}>
      <VictoryChart
        theme={theme}
        padding={{ top: 30, bottom: 40, left: 60, right: 40 }}
        containerComponent={
          <VictoryVoronoiContainer
            labels={d => `${d.x}:\n${numberFormat(d.y)} (${d.year})`}
            labelComponent={<VictoryTooltip />}
          />
        }
      >
        <VictoryArea
          interpolation="step"
          data={data1915}
          labelComponent={<VictoryTooltip />}
          style={{ data: { fill: '#dadada' } }}
        />
        <VictoryLine interpolation="step" data={data2015} />
        <VictoryAxis fixLabelOverlap />
        <VictoryAxis dependentAxis tickFormat={d => numberFormat(d)} />
      </VictoryChart>
    </ChartContainer>
  )
}

export default PopulationOverTime
