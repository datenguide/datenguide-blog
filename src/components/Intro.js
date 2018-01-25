import React from 'react'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Footer from 'grommet/components/Footer'
import Menu from 'grommet/components/Menu'
import Headline from 'grommet/components/Headline'

export default function Intro(props) {
  return (
    <Box direction="row" flex="grow" justify="center" colorIndex="light-2">
      <Box
        direction="row"
        flex="grow"
        size={{ width: { max: 'xxlarge' } }}
        pad="medium"
      >
        <Headline size="large">{page.frontmatter.intro}</Headline>
      </Box>
    </Box>
  )
}
