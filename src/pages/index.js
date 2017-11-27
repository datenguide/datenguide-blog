import React from 'react'
import Box from 'grommet/components/Box'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default ({ data }) => {
  console.log(data)
  return (
    <div>

      <Header />

      <Box direction="row" flex="grow" justify="center" colorIndex="light-2">
        <Box
          direction="row" flex="grow"
          size={{width: {max: 'xxlarge'}}}
          pad='medium'>
          First Box
        </Box>
      </Box>

      <Box direction="row" flex="grow" justify="center">
        <Box
          direction="row" flex="grow"
          size={{width: {max: 'xxlarge'}}}
          pad='medium'>
          Second section
        </Box>
      </Box>

      <Footer />

    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`
