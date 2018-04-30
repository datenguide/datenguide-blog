import React, { Component } from 'react'
import query from 'raw-loader!./PopulationOverTime.graphql'

const PopulationOverTime = () => {
  return <pre>{query}</pre>
}

export default PopulationOverTime
