import React from 'react'
import { TabBar, Tab } from 'rmwc/Tabs'
import { CSVLink } from 'react-csv'

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
    const { data, dataHeaders, credits, children } = this.props

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
          chartComponent={children}
          props={this.props}
        />

        <small className="chart-container__credits">
          {credits.publisher}{' '}
          <a href={credits.licenseUrl}>{credits.licenseTitle}</a>
        </small>

        <CSVLink
          data={data}
          headers={dataHeaders}
          filename={'datenguide.csv'}
          className="mdc-button mdc-button--outlined"
        >
          Daten herunterladen
        </CSVLink>
      </div>
    )
  }
}

export default ChartContainer
