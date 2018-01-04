import React from 'react'

export default ({ data }) => {
  const {district} = data

  return (
    <div>
      <h1>{district.name}</h1>
      <ul>
        <li>{district.munis}</li>
        <li>{district.id}</li>
      </ul>
    </div>
  )
}

export const query = graphql`
  query DistrictQuery($slug: String!) {
    district(id: { eq: $slug }) {
      id
      munis
      name
    }
  }
`
