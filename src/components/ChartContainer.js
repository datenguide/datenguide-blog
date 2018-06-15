import React from 'react'
import { TabBar, Tab } from 'rmwc/Tabs'

import DataTable from './DataTable'
import '../scss/components/_chart-container.scss'

const TabSelector = ({ activeTab, data, query, chartComponent, headers }) => {
  switch (activeTab) {
    case 0:
      return chartComponent
    case 1:
      return <TabData data={data} headers={headers} />
    case 2:
      return <TabApi query={query} />
    default:
      return null
  }
}

const TabData = ({ data, headers }) => (
  <DataTable data={data} headers={headers} />
)

const TabApi = ({ query }) => (
  <pre className="chart-container__snippet">
    <code>{query}</code>
  </pre>
)

class ChartContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }
  render() {
    return (
      <div className="chart-container">
        <TabBar
          onChange={({ detail }) =>
            this.setState({ activeTab: detail.activeTabIndex })
          }
        >
          <Tab>Visualisierung</Tab>
          <Tab>Daten</Tab>
          <Tab>GraphQL</Tab>
        </TabBar>

        <TabSelector
          chartComponent={this.props.children}
          activeTab={this.state.activeTab}
          data={this.props.data}
          headers={this.props.dataHeaders}
          query={this.props.query}
        />
      </div>
    )
  }
}

export default ChartContainer
