import React from "react"
import Box from 'grommet/components/Box'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Funders from '../components/Funders'
import Footer from '../components/Footer'

export default ({ data }) => {
  const page = data.markdownRemark
  return (
    <div>

      <Header />

      <Box direction="row" flex="grow" justify="center" colorIndex="light-2">
        <Box size={{width: {max: 'xxlarge'}}} flex="grow" pad='large'>
          <h3>{page.frontmatter.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </Box>
      </Box>

      <Box direction="row" flex="grow" justify="center">
        <Newsletter />
      </Box>

      <Footer />

    </div>
  )
}

export const query = graphql`
  query DefaultPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
