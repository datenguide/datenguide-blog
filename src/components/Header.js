import React from 'react'
import { Toolbar, ToolbarRow, ToolbarSection } from 'rmwc/Toolbar'

import Logo from './Logo'

export default function AppHeader(props) {
  return (
    <Toolbar fixed waterfall>
      <ToolbarRow>
        <ToolbarSection alignStart>
          <Logo />
        </ToolbarSection>
        <ToolbarSection alignEnd />
      </ToolbarRow>
    </Toolbar>
  )
}
