import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

import Search from './Search'
import '../scss/components/_hero.scss'

export default ({ search, title }) => (
  <div className="hero hero--search">
    <Grid>
      <GridCell span="12">
        <h1 className="hero__title">{title}</h1>
      </GridCell>
    </Grid>
  </div>
)
