import React from 'react'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Footer from 'grommet/components/Footer'
import Menu from 'grommet/components/Menu'

export default function AppFooter (props) {
  return (
    <Footer justify="center" colorIndex="neutral-4">
      <Box size={{width: {max: 'xxlarge'}}} direction="row"
        responsive={false} justify="start" align="center"
        pad={{horizontal: 'medium'}} flex="grow">
        <Box flex="grow" align="end">
          <Menu label="Label" inline={true} direction="row">
            <Anchor href="#">Contact</Anchor>
            <Anchor href="#">About</Anchor>
          </Menu>
        </Box>
      </Box>
    </Footer>
  )
}
