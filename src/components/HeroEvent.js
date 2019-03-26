import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

import '../scss/components/_hero.scss'

export default ({ title, tagline, meta }) => (
  <div className="hero hero--event">
    <Grid>
      <GridCell span="12">
        <h1 className="hero__title">{title}</h1>
        <div className="hero__tagline">
          <span>{tagline}</span>
        </div>
        <div className="hero__meta">{meta}</div>
      </GridCell>
    </Grid>
  </div>
)
