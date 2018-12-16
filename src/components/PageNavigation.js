import React from 'react'
import { Link } from 'gatsby'

import '../scss/components/_page-navigation.scss'

export default ({ items }) => (
  <nav className="page-navigation">
    <ul className="page-navigation__list">
      {items.map(({ path, title }) => (
        <li key={path} className="page-navigation__list-item">
          <Link to={path} className="page-navigation__link">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)
