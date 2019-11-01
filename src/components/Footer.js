import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import GithubCircleIcon from 'mdi-react/GithubCircleIcon'

import '../scss/components/_footer.scss'

export default function AppFooter(props) {
  return (
    <footer className="footer">
      <Grid>
        <GridCell span="7">
          <a
            className="footer__link footer__link--github"
            href="https://github.com/datenguide/datenguide"
          >
            <GithubCircleIcon />
            Datenguide ist open source
          </a>
        </GridCell>
        <GridCell span="5">
          <a
            className="footer__link footer__link--contact"
            href="https://datengui.de/info/kontakt"
          >
            Kontakt und Impressum
          </a>
          <a
            className="footer__link footer__link--privacy"
            href="https://datengui.de/info/datenschutz"
          >
            Datenschutz
          </a>
        </GridCell>
      </Grid>
    </footer>
  )
}
