import React from 'react'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Logo from './Logo'

export default function AppHeader (props) {
  return (
    <Header justify="center">
      <Box size={{width: {max: 'xxlarge'}}} direction="row"
        responsive={false} flex="grow" pad='large'>

        <Logo />

      </Box>
    </Header>
  )
}
