import React from 'react'
import * as alphabet from 'alphabet'

import '../scss/components/data-table.scss'

const VerticalTable = ({ columnLabels, data }) => {
  const colIndex = Array.from(Array(data.length + 1).keys())
  const colHeader = colIndex.map(i => alphabet.upper[i])

  return (
    <table>
      <thead>
        <tr>
          <th className="data-table__cell--plain">
            <button className="data-table__transpose">⤭</button>
          </th>
          {colHeader.map(i => <th>{i}</th>)}
        </tr>
      </thead>

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
    </table>
  )
}

const HorizontalTable = ({ columnLabels, data }) => (
  <table>
    <thead>
      <tr>{columnLabels.map(label => <th>{label}</th>)}</tr>
    </thead>
    <tbody>
      {data.map(row => (
        <tr>
          <td>{row.x}</td>
          <td>{row.y}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default function DataTable({ columnLabels, data }) {
  return (
    <div className="data-table">
      <div className="data-table__container">
        <VerticalTable columnLabels={columnLabels} data={data} />
      </div>
    </div>
  )
}
