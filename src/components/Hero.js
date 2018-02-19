import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

export default ({ tagline }) => (
  <div className="hero">
    <Grid>
      <GridCell span="12">
        <h1 className="hero__tagline">{tagline}</h1>
      </GridCell>
    </Grid>
  </div>
)
