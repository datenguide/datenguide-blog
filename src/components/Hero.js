import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

import Search from './Search'

export default ({ regions, tagline }) => (
  <div className="hero">
    <Grid>
      <GridCell span="12">
        <h1 className="hero__tagline">{tagline}</h1>
        <div className="hero__search">
          <Search regions={regions} />
        </div>
      </GridCell>
    </Grid>
  </div>
)
