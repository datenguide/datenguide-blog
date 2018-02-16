import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

export default ({ data }) => {
  const page = data.markdownRemark
  return (
    <div>
      <Header />

      <Grid>
        <GridCell span="8">
          <h2>404</h2>
          <p>Page does not exist</p>
        </GridCell>
      </Grid>

      <Grid>
        <GridCell span="6">
          <Funders />
        </GridCell>
      </Grid>

      <Grid>
        <GridCell span="12">
          <Newsletter />
        </GridCell>
      </Grid>

      <Footer />

      <Footer />
    </div>
  )
}
