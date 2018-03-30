import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

import Header from '../components/Header'
import Footer from '../components/Footer'
import DistrictList from '../components/DistrictList'

const prepareData = ({ regions, stateNames }) => {
  const districts = regions.edges
    .filter(({ node }) => node.slug !== node.state.slug)
    .map(({ node }) => node)

  const states = regions.edges
    .filter(({ node }) => node.slug === node.state.slug)
    .map(({ node }) => node)
    .reduce((map, state) => ((map[state.slug] = state), map), {})

  return stateNames.distinct.map(stateSlug => ({
    ...states[stateSlug],
    districts: districts.filter(({ state }) => stateSlug === state.slug)
  }))
}

export default ({ data }) => (
  <div>
    <Header />
    <Grid>
      <GridCell span="12">
        {prepareData(data).map(state => (
          <section key={state.id}>
            <h2>{state.name}</h2>
            <DistrictList districts={state.districts} />
          </section>
        ))}
      </GridCell>
    </Grid>
    <Footer />
  </div>
)

export const query = graphql`
  query regionsOverview {
    stateNames: allRegion(filter: { slug: { ne: "deutschland" } }) {
      distinct(field: state___slug)
    }
    regions: allRegion(
      filter: { slug: { ne: null } }
      sort: { fields: [slug], order: ASC }
    ) {
      edges {
        node {
          id
          slug
          name
          name_ext
          state {
            slug
          }
        }
      }
    }
  }
`
