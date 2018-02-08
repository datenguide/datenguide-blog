import React from 'react'
import GatsbyLink from 'gatsby-link'
import { Grid, GridCell } from 'rmwc/Grid'

export default function AppFooter(props) {
  return (
    <footer className="footer">
      <Grid>
        <GridCell span="12">
          <GatsbyLink to="contact">Kontakt und Impressum</GatsbyLink>
        </GridCell>
      </Grid>
    </footer>
  )
}
