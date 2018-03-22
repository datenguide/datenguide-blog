import React from 'react'
import GatsbyLink from 'gatsby-link'

export default function DistrictList({ districts }) {
  return (
    <ul className="district-list">
      {districts.map(district => (
        <li key={district.id}>
          <GatsbyLink to={district.slug}>{district.name}</GatsbyLink>
        </li>
      ))}
    </ul>
  )
}
