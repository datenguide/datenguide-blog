import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import StateList from '../components/StateList'

const STATE_NAMES = [
  'baden-wuerttemberg',
  'bayern',
  'brandenburg',
  'bremen-bundesland',
  'hessen',
  'mecklenburg-vorpommern',
  'niedersachsen',
  'nordrhein-westfalen',
  'rheinland-pfalz',
  'saarland',
  'sachsen',
  'sachsen-anhalt',
  'schleswig-holstein',
  'thueringen'
]

const prepareData = ({ regions }) => {
  const districts = regions.edges
    .map(({ node: { region } }) => region)
    .filter(region => region.state)

  return STATE_NAMES.map(stateSlug => ({
    districts: districts.filter(({ state }) => stateSlug === state.slug)
  }))
}

export default ({ data }) => {
  return (
    <Layout>
      <Header />

      <Hero
        title={data.page.frontmatter.title}
        intro={data.page.frontmatter.intro}
      />

      {prepareData(data).map(state => (
        <StateList state={state} />
      ))}

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query regionsOverview($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        intro
      }
    }
    regions: allMarkdownRemark(
      filter: { fields: { slug: { regex: "//regions/..*$/" } } }
      sort: { fields: [frontmatter___name], order: ASC }
    ) {
      edges {
        node {
          region: frontmatter {
            slug
            name
            name_ext
            state {
              id
              name
              slug
            }
          }
        }
      }
    }
  }
`
