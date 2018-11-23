import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { graphql } from 'gatsby'

import PageMeta from '../components/PageMeta'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import ArticleHeader from '../components/ArticleHeader'

export default ({ data, location }) => {
  const {
    frontmatter: { title, description, author, lang, date },
    html
  } = data.markdownRemark

  return (
    <Layout>
      <Header />

      <PageMeta
        lang={lang}
        pathname={location.pathname}
        title={title}
        description={description}
      />

      <ArticleHeader
        title={title}
        description={description}
        date={date}
        author={author}
      />

      <Grid>
        <GridCell span="8">
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
        description
        lang
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
