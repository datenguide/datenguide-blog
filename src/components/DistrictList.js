import React from 'react'
import GatsbyLink from 'gatsby-link'

import '../scss/components/district-list.scss'

export default function DistrictList({ districts }) {
  return (
    <ul className="district-list">
      {districts.map(district => (
        <li className="district-list__item" key={district.id}>
          <GatsbyLink className="district-list__link" to={district.slug}>
            {district.name}
          </GatsbyLink>
        </li>
      ))}
    </ul>
  )
}
