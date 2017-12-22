import React from 'react'
import Box from 'grommet/components/Box'
import Footer from 'grommet/components/Footer'
import GatsbyLink from 'gatsby-link'

export default function AppFooter (props) {
  return (
    <Footer justify="center" colorIndex="neutral-2-a">
      <Box size={{width: {max: 'xxlarge'}}} direction="row"
        responsive={false} justify="start" align="center"
        pad={{horizontal: 'medium'}} flex="grow">
        <Box flex="grow" align="end">
          <GatsbyLink to="contact">Kontakt</GatsbyLink>
        </Box>
      </Box>
    </Footer>
  )
}
