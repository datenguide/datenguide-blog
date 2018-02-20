import React from 'react'
import GatsbyLink from 'gatsby-link'
import { Grid, GridCell } from 'rmwc/Grid'
import GithubCircleIcon from 'mdi-react/GithubCircleIcon'

export default function AppFooter(props) {
  return (
    <footer className="footer">
      <Grid>
        <GridCell span="8">
          <a
            className="footer__link footer__link--github"
            href="http://github.com/datenguide"
          >
            <GithubCircleIcon />
            Datenguide ist open source
          </a>
        </GridCell>
        <GridCell span="4">
          <GatsbyLink
            className="footer__link footer__link--contact"
            to="contact"
          >
            Kontakt und Impressum
          </GatsbyLink>
        </GridCell>
      </Grid>
    </footer>
  )
}
