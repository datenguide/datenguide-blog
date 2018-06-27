import React from 'react'

export default function DataQuery({ query }) {
  return (
    <pre className="chart-container__snippet">
      <code>{query}</code>
    </pre>
  )
}
