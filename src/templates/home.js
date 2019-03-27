import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import HeroSearch from '../components/HeroSearch'
import ArticleList from '../components/ArticleList.js'
import Newsletter from '../components/Newsletter'
import Funders from '../components/Funders'
import Footer from '../components/Footer'
import RegionTeaser from '../components/region/RegionTeaser.js'

export default ({ data }) => {
  const { page, articleList, search } = data

  return (
    <Layout>
      <Header />

      <HeroSearch search={search} title={page.frontmatter.intro} />

      <Grid>
        <GridCell tablet="12" desktop="8">
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </GridCell>
        <GridCell tablet="12" desktop="4">
          <ArticleList articles={articleList} />
        </GridCell>
      </Grid>

      <Grid>
        <GridCell tablet="12" desktop="6">
          <Funders />
        </GridCell>
      </Grid>

      <Newsletter />

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        intro
      }
    }
    ...search
    ...ArticleList
  }
`
