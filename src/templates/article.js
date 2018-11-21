import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <Header />

      <Grid>
        <GridCell span="8">
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.author}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </GridCell>
      </Grid>

      <Newsletter />

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query ArticleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
      }
    }
  }
`
