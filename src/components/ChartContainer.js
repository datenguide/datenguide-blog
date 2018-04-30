import React from 'react'
import { TabBar, Tab } from 'rmwc/Tabs'
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory'

import DataTable from './DataTable'
import theme from './theme'

const TabSelector = ({ activeTab, data, query }) => {
  switch (activeTab) {
    case 0:
      return <TabVis data={data} />
    case 1:
      return <TabData data={data} />
    case 2:
      return <TabApi query={query} />
    default:
      return null
  }
}

const TabData = ({ data }) => (
  <DataTable
    data={data}
    headers={[{ key: 'x', label: 'Jahr' }, { key: 'y', label: 'Einwohner' }]}
  />
)

const TabVis = ({ data }) => (
  <VictoryChart
    theme={theme}
    padding={{ top: 20, bottom: 40, left: 60, right: 40 }}
  >
    <VictoryBar data={data} />
    <VictoryAxis fixLabelOverlap />
    <VictoryAxis
      dependentAxis
      tickFormat={val => Intl.NumberFormat('de').format(val)}
    />
  </VictoryChart>
)

const TabApi = ({ query }) => <pre>{query}</pre>

class ChartContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }
  render() {
    const data = _(this.props.data)
      .mapValues((value, id) => ({
        x: id.substring(1),
        y: parseInt(value, 10)
      }))
      .values()
      .sortBy(value => value.x)
      .value()

    return (
      <div className="chart-container">
        <TabBar
          onChange={evt => this.setState({ activeTab: evt.target.value })}
        >
          <Tab>Visualisierung</Tab>
          <Tab>Daten</Tab>
          <Tab>GraphQL</Tab>
        </TabBar>

        <TabSelector
          activeTab={this.state.activeTab}
          data={data}
          query={this.props.query}
        />
      </div>
    )
  }
}

export default ChartContainer
