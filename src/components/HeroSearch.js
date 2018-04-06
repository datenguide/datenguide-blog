import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

import Search from './Search'
import '../scss/components/_hero.scss'

export default ({ regions, title }) => (
  <div className="hero hero--search">
    <Grid>
      <GridCell span="12">
        <h1 className="hero__title">{title}</h1>
        <div className="hero__search">
          <Search regions={regions} />
        </div>
      </GridCell>
    </Grid>
  </div>
)
