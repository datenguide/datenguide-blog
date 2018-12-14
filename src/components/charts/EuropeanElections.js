import React from 'react'
import {
  VictoryChart,
  VictoryArea,
  VictoryLine,
  VictoryAxis,
  VictoryVoronoiContainer,
  VictoryTooltip
} from 'victory'
import _ from 'lodash'

import ChartContainer from '../ChartContainer'
import theme from '../theme'

const labels = [
  {
    id: 'AI0601',
    label: 'CDU/CSU',
    color: '#1C1C1B'
  },
  {
    id: 'AI0602',
    label: 'SPD',
    color: '#E00F21'
  },
  {
    id: 'AI0603',
    label: 'FDP',
    color: '#F8D730'
  },
  {
    id: 'AI0604',
    label: 'GRÜNE',
    color: '#87BA33'
  },
  {
    id: 'AI0605',
    label: 'LINKE',
    color: '#E2137D'
  }
]

const prepareData = (data, labels) =>
  labels.map(label => ({
    ...label,
    data: _.sortBy(data[label.id], 'year')
  }))

const EuropeanElections = ({ data, credits }) => {
  const tip = d => `${d.desc}:\n${numFormat(d[d.childName])} (${d.childName})`

  const numFormat = Intl.NumberFormat('de').format
  const series = prepareData(data, labels)
  const voterTurnout = _.sortBy(data.AI0606, 'year')

  return (
    <ChartContainer
      id={data.id}
      query={''}
      data={[]}
      dataHeaders={[]}
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
          name="Wahlbeteiligung"
          data={voterTurnout}
          x="year"
          y="value"
          style={{ data: { fill: '#dadada' } }}
        />

        {series.map(({ data, label, color, id }) => (
          <VictoryLine
            key={id}
            name={label}
            data={data}
            x="year"
            y="value"
            style={{ data: { stroke: color } }}
          />
        ))}

        <VictoryAxis fixLabelOverlap />
        <VictoryAxis dependentAxis tickFormat={numFormat} />
      </VictoryChart>
    </ChartContainer>
  )
}

export default EuropeanElections
