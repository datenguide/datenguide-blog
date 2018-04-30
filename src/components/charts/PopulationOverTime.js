import React, { Component } from 'react'

import ChartContainer from '../ChartContainer'
import query from 'raw-loader!./PopulationOverTime.graphql'

const PopulationOverTime = ({ data }) => {
  return (
    <ChartContainer
      query={query}
      data={data.BEVSTD.ALTX20.INSGESAMT.GEST__years}
    />
  )
}

export default PopulationOverTime
