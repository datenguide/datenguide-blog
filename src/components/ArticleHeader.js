import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

import '../scss/components/_article-header.scss'

export default ({ title, description, date, author }) => (
  <div className="article-header">
    <div className="article-header__hgroup">
      <Grid>
        <GridCell span="8">
          <h1 className="article-header__title">{title}</h1>
          <p className="article-header__description">{description}</p>
        </GridCell>
      </Grid>
    </div>
    <Grid className="article-header__meta">
      <GridCell span="8">
        <time className="article-header__date">{date}</time>
        <span className="article-header__author">{author}</span>
      </GridCell>
    </Grid>
  </div>
)
