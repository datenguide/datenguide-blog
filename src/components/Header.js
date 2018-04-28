import React from 'react'
import GatsbyLink from 'gatsby-link'
import { Toolbar, ToolbarRow, ToolbarSection } from 'rmwc/Toolbar'

import Logo from './Logo'
import '../scss/components/_header.scss'

export default function AppHeader(props) {
  return (
    <Toolbar fixed waterfall>
      <ToolbarRow>
        <ToolbarSection alignStart>
          <Logo />
        </ToolbarSection>
        <ToolbarSection alignEnd>
          <GatsbyLink to="/regions">Explore</GatsbyLink>
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>
  )
}
