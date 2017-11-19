import React from 'react'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Menu from 'grommet/components/Menu'
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline'

export default function AppHeader (props) {
  return (
    <Header justify="center" colorIndex="neutral-4">
      <Box size={{width: {max: 'xxlarge'}}} direction="row"
        responsive={false} justify="start" align="center"
        pad={{horizontal: 'medium'}} flex="grow">
        <GrommetIcon colorIndex="brand" size="large" />
        <Box flex="grow" align="end">
          <Menu label="Label" inline={true} direction="row">
            <Anchor href="#">Contact</Anchor>
            <Anchor href="#">About</Anchor>
          </Menu>
        </Box>
      </Box>
    </Header>
  )
}
