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

const WaterConsumption = ({ data, credits }) => {
  const numFormat = Intl.NumberFormat('de').format
  const waterConsumption = _.sortBy(data.WAS008, 'year')
  const tip = d => `${d.childName}:\n${numFormat(d.value)}%`

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
          name="Wasserverbrauch"
          data={waterConsumption}
          x="year"
          y="value"
          style={{ data: { fill: '#dadada' } }}
        />

        <VictoryAxis fixLabelOverlap />
        <VictoryAxis dependentAxis tickFormat={numFormat} />
      </VictoryChart>
    </ChartContainer>
  )
}

export default WaterConsumption
