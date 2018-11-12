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

const prepareData = ({ datenguide: { regions } }) => {
  const districts = regions
    .filter(({ state }) => state)
    .sort((a, b) => a.name > b.name)

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

    datenguide {
      regions {
        id
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
`
