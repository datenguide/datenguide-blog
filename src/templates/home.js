import React from 'react'
import Box from 'grommet/components/Box'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default ({ data }) => {
  const page = data.markdownRemark

  return (
    <div>

      <Header />

      <Box direction="row" flex="grow" justify="center" colorIndex="light-2">
        <Box
          direction="row" flex="grow"
          size={{width: {max: 'xxlarge'}}}
          pad='medium'>
            <h2>{ page.frontmatter.title }</h2>
            <p>{ page.frontmatter.intro }</p>
        </Box>
      </Box>

      <Box direction="row" flex="grow" justify="center">
        <Box
          direction="row" flex="grow"
          size={{width: {max: 'xxlarge'}}}
          pad='medium'>
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
