import React from 'react'
import GatsbyLink from 'gatsby-link'
import { TopAppBar, TopAppBarRow, TopAppBarSection } from 'rmwc/TopAppBar'

import Logo from './Logo'
import '../scss/components/_header.scss'

export default function AppHeader(props) {
  return (
    <TopAppBar className="header" dense>
      <TopAppBarRow className="header__row">
        <TopAppBarSection alignStart>
          <Logo />
        </TopAppBarSection>
        <TopAppBarSection alignEnd>
          <GatsbyLink className="header__nav-item" to="/regions">
            Alle Regionen
          </GatsbyLink>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  )
}
