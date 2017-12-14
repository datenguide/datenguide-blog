import React from 'react'
import Box from 'grommet/components/Box'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Headline from 'grommet/components/Headline'
import Markdown from 'grommet/components/Markdown'

export default ({ data }) => {
  const page = data.markdownRemark

  return (
    <div>

      <Header />

      <Box direction="row" flex="grow" justify="center" colorIndex="light-2">
        <Box size={{width: {max: 'xxlarge'}}} pad='large'>
          <Markdown content={page.frontmatter.intro} />
        </Box>
      </Box>

      <Box direction="row" flex="grow" justify="center">
        <Box size={{width: {max: 'xxlarge'}}} pad='large'>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </Box>
      </Box>

      <Footer />

    </div>
  )
}

export const query = graphql`
  query HomeQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        intro
      }
    }
  }
`
