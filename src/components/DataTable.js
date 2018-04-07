import React from 'react'

export default function DataTable({ data }) {
  return (
    <div className="data-table">
      <table>
        {data.map(row => (
          <tr>
            <td>{row.x}</td>
            <td>{row.y}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}
