import React from 'react'
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
  <ul>
    {prepareData(data).map(state => (
      <li key={state.id}>
        <h3>{state.name}</h3>
        <DistrictList districts={state.districts} />
      </li>
    ))}
  </ul>
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
          state {
            slug
          }
        }
      }
    }
  }
`
