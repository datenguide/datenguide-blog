import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => {
  return (
    <div>
      <Header />

      <Grid>
        <GridCell span="8">
          <h2>404</h2>
          <p>Page does not exist</p>
        </GridCell>
      </Grid>

      <Footer />
    </div>
  )
}
