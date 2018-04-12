import React from 'react'

import '../scss/components/data-table.scss'

export default function DataTable({ data }) {
  return (
    <table className="data-table">
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
