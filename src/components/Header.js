import React from 'react'
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMenuIcon,
  ToolbarIcon
} from 'rmwc/Toolbar'

import Logo from './Logo'

export default function AppHeader(props) {
  return (
    <Toolbar>
      <ToolbarRow>
        <ToolbarSection alignStart>
          <Logo />
        </ToolbarSection>
        <ToolbarSection alignEnd />
      </ToolbarRow>
    </Toolbar>
  )
}
