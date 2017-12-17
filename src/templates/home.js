import React from 'react'
import Box from 'grommet/components/Box'
import Split from 'grommet/components/Split'
import Headline from 'grommet/components/Headline'
import Markdown from 'grommet/components/Markdown'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default ({ data }) => {
  const page = data.markdownRemark

  return (
    <div>

      <Header />

      <Box direction="row" flex="grow" justify="center" colorIndex="neutral-2-a">
        <Box size={{width: {max: 'xxlarge'}}} pad="large">
          <Markdown content={page.frontmatter.intro} />
        </Box>
      </Box>

      <Box direction="row" flex="grow" justify="center">
        <Box size={{width: {max: 'xxlarge'}}} pad="large" align="start">

          <Split>

            <div dangerouslySetInnerHTML={{ __html: page.html }} />

          </Split>
        </Box>
      </Box>

      <Box direction="row" flex="grow" justify="center" colorIndex="light-2">
        <Newsletter />
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
