import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

import Search from './Search'

export default ({ districts, tagline }) => (
  <div className="hero">
    <Grid>
      <GridCell span="12">
        <h1 className="hero__tagline">{tagline}</h1>
        <div className="hero__search">
          <Search districts={districts} />
        </div>
      </GridCell>
    </Grid>
  </div>
)
