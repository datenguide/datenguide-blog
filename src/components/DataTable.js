import React from 'react'

import '../scss/components/data-table.scss'

export default function DataTable({ columnLabels, data }) {
  return (
    <table className="data-table">
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
}
