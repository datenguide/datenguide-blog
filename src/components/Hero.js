import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import Header from '../components/Header'

export default ({ tagline }) => (
  <Grid>
    <GridCell span="12">
      <h1>{tagline}</h1>
    </GridCell>
  </Grid>
)
