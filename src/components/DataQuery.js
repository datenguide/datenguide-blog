import React from 'react'

const findFragmentName = (queryFragment, keyword) => {
  const segments = queryFragment.split(' ')
  return segments[segments.indexOf('fragment') + 1]
}

const composeQueryHeader = (id, fragmentName) => `{
  region(id: "${id}") {
    ...${fragmentName}
  }
}\n\n`

export default function DataQuery({ id, queryFragment }) {
  const fragmentName = findFragmentName(queryFragment)
  const queryHeader = composeQueryHeader(id, fragmentName)

  return (
    <pre className="chart-container__snippet">
      <code>
        {queryHeader}
        {queryFragment}
      </code>
    </pre>
  )
}
