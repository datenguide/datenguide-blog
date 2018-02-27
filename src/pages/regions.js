import React from 'react'

const renderRegion = ({ node }) => {
  return (
    <li key={node.id}>
      <a href={node.slug}>{node.name}</a>
    </li>
  )
}

export default ({ data }) => {
  const regions = data.allRegion.edges
  return <ul>{regions.map(renderRegion)}</ul>
}

export const query = graphql`
  query regionsOverview {
    allRegion {
      edges {
        node {
          id
          slug
          name
        }
      }
    }
  }
`
