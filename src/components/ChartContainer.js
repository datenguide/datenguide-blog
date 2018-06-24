import React from 'react'
import { TabBar, Tab } from 'rmwc/Tabs'

import DataTable from './DataTable'
import DataQuery from './DataQuery'

import '../scss/components/_chart-container.scss'

const TabSelector = ({ activeTab, chartComponent, props }) => {
  switch (activeTab) {
    case 0:
      return chartComponent
    case 1:
      return <DataTable data={props.data} headers={props.dataHeaders} />
    case 2:
      return <DataQuery id={props.id} queryFragment={props.query} />
    default:
      return null
  }
}

class ChartContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }

  render() {
    return (
      <div className="chart-container">
        <TabBar
          className="chart-container__tab-bar"
          onChange={({ detail }) =>
            this.setState({ activeTab: detail.activeTabIndex })
          }
        >
          <Tab className="chart-container__tab">Visualisierung</Tab>
          <Tab className="chart-container__tab">Daten</Tab>
          <Tab className="chart-container__tab">GraphQL</Tab>
        </TabBar>

        <TabSelector
          activeTab={this.state.activeTab}
          chartComponent={this.props.children}
          props={this.props}
        />
      </div>
    )
  }
}

export default ChartContainer
