import React from 'react'
import * as alphabet from 'alphabet'

import '../scss/components/data-table.scss'

const TableHeader = ({ isTransposed, transpose, data, columnLabels }) => {
  const colIndex = isTransposed ? data.length + 1 : columnLabels.length
  const colIndexArray = Array.from(Array(colIndex).keys())
  const colHeader = colIndexArray.map(i => alphabet.upper[i])

  return (
    <thead>
      <tr>
        <th className="data-table__transpose">
          <button onClick={transpose}>⤭</button>
        </th>
        {colHeader.map(i => <th>{i}</th>)}
      </tr>
    </thead>
  )
}

const TableBody = ({ isTransposed, ...props }) =>
  isTransposed ? TableBodyHorizontal(props) : TableBodyVertical(props)

const TableBodyHorizontal = ({ columnLabels, data }) => (
  <tbody>
    <tr>
      <th>1</th>
      <td className="data-table__cell--str">{columnLabels[0]}</td>
      {data.map(row => <td className="data-table__cell--num">{row.x}</td>)}
    </tr>
    <tr>
      <th>2</th>
      <td className="data-table__cell--str">{columnLabels[1]}</td>
      {data.map(row => <td className="data-table__cell--num">{row.y}</td>)}
    </tr>
  </tbody>
)

const TableBodyVertical = ({ columnLabels, data }) => (
  <tbody>
    <tr>
      <th>1</th>
      {columnLabels.map(label => (
        <th className="data-table__cell--num">{label}</th>
      ))}
    </tr>
    {data.map((row, index) => (
      <tr>
        <th>{index + 2}</th>
        <td className="data-table__cell--num">{row.x}</td>
        <td className="data-table__cell--num">{row.y}</td>
      </tr>
    ))}
  </tbody>
)

class DataTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isTransposed: false }
    this.transpose = this.transpose.bind(this)
  }

  transpose() {
    this.setState(prevState => ({
      isTransposed: !prevState.isTransposed
    }))
  }

  render() {
    return (
      <div className="data-table">
        <div className="data-table__container">
          <table>
            <TableHeader
              isTransposed={this.state.isTransposed}
              transpose={this.transpose}
              columnLabels={this.props.columnLabels}
              data={this.props.data}
            />
            <TableBody
              isTransposed={this.state.isTransposed}
              columnLabels={this.props.columnLabels}
              data={this.props.data}
            />
          </table>
        </div>
      </div>
    )
  }
}

export default DataTable
