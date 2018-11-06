import React from 'react'
import { Link } from 'gatsby'
import CityIcon from 'mdi-react/CityIcon'

import '../scss/components/district-list.scss'

export default function DistrictList({ districts }) {
  return (
    <ul className="district-list">
      {districts.map(district => (
        <li className="district-list__item" key={district.id}>
          <Link className="district-list__link" to={`/${district.slug}`}>
            <CityIcon className="district-list__icon" />
            <h3 className="district-list__name">{district.name}</h3>
            <span className="district-list__extension">
              {district.name_ext}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
