import React from 'react'
import { Link } from 'gatsby'
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
          {props.children || (
            <Link className="header__nav-item" to="/regions">
              Alle Regionen
            </Link>
          )}
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  )
}
