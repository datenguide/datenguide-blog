import React from 'react'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Menu from 'grommet/components/Menu'
import Logo from './Logo'

export default function AppHeader (props) {
  return (
    <Header justify="center">
      <Box size={{width: {max: 'xxlarge'}}} direction="row"
        responsive={false} flex="grow" pad='large'>

        <Logo />

        <Box flex="grow" align="end">
          <Menu label="Label" inline={true} direction="row">
            <Anchor href="/contact">Contact</Anchor>
          </Menu>
        </Box>
      </Box>
    </Header>
  )
}
