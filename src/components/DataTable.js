import React from 'react'

import '../scss/components/data-table.scss'

const VerticalTable = ({ columnLabels, data }) => (
  <table>
    <tbody>
      <tr>
        <th>{columnLabels[0]}</th>
        {data.map(row => <td>{row.x}</td>)}
      </tr>
      <tr>
        <th>{columnLabels[1]}</th>
        {data.map(row => <td>{row.y}</td>)}
      </tr>
    </tbody>
  </table>
)

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
      <VerticalTable columnLabels={columnLabels} data={data} />
    </div>
  )
}
