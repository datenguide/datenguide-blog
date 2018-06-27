import React from 'react'
import { TabBar, Tab } from 'rmwc/Tabs'
import { CSVLink } from 'react-csv'
import DownloadIcon from 'mdi-react/DownloadIcon'
import CodeBracesIcon from 'mdi-react/CodeBracesIcon'

import DataTable from './DataTable'
import DataQuery from './DataQuery'

import '../scss/components/_chart-container.scss'

const findFragmentName = (queryFragment, keyword) => {
  const segments = queryFragment.split(' ')
  return segments[segments.indexOf('fragment') + 1]
}

const composeFullQuery = (id, fragmentName, query) => `{
  region(id: "${id}") {
    ...${fragmentName}
  }
}\n\n${query}`

const TabSelector = ({ activeTab, chartComponent, fullQuery, props }) => {
  switch (activeTab) {
    case 0:
      return chartComponent
    case 1:
      return <DataTable data={props.data} headers={props.dataHeaders} />
    case 2:
      return <DataQuery query={fullQuery} />
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
    const { data, dataHeaders, credits, children, query, id } = this.props
    const fragmentName = findFragmentName(query)
    const fullQuery = composeFullQuery(id, fragmentName, query)

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
          fullQuery={fullQuery}
          props={this.props}
        />

        <small className="chart-container__credits">
          {credits.publisher}{' '}
          <a href={credits.licenseUrl}>{credits.licenseTitle}</a>
        </small>

        <div className="chart-container__actions">
          <CSVLink
            data={data}
            headers={dataHeaders}
            filename={'datenguide.csv'}
            className="mdc-button mdc-button--outlined"
          >
            <DownloadIcon className="mdc-button__icon" aria-hidden="true" />
            CSV herunterladen
          </CSVLink>

          <a
            className="mdc-button mdc-button--outlined"
            href={`https://api.datengui.de/?query=${escape(fullQuery)}`}
          >
            <CodeBracesIcon className="mdc-button__icon" aria-hidden="true" />
            GraphQL testen
          </a>
        </div>
      </div>
    )
  }
}

export default ChartContainer
