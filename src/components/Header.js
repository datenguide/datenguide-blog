import React from 'react'
import GithubCircleIcon from 'mdi-react/GithubCircleIcon'
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
            <a
              className="header__link header__link--github"
              href="http://github.com/datenguide/datenguide"
            >
              <GithubCircleIcon />
              Datenguide ist open source
            </a>
          )}
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
  )
}
