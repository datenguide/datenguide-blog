import React from 'react'

const renderDistrict = ({ node }) => {
  return (
    <li key={node.id}>
      <a href={node.slug}>{node.name}</a>
    </li>
  )
}

export default ({ data }) => {
  const districts = data.allDistrict.edges
  return <ul>{districts.map(renderDistrict)}</ul>
}

export const query = graphql`
  query districtsOverview {
    allDistrict {
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
