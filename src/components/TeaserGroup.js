import React from 'react'
import {
  Card,
  CardMedia,
  CardPrimaryAction,
  CardActions,
  CardActionButtons,
  CardActionButton,
  CardActionIcons,
  CardActionIcon
} from 'rmwc/Card'
import { Grid, GridCell } from 'rmwc/Grid'
import { Button } from 'rmwc/Button'

import '../scss/components/_teaser-group.scss'

function TeaserCard({ name, description, link, linkText, image }) {
  return (
    <GridCell key={name} span="4" tablet="12">
      <div className="teaser-group__card">
        <Card>
          <CardPrimaryAction>
            <a href={link} className="teaser-group__card__link" alt="">
              <img className="teaser-group__card__image" src={image} />
              <div className="teaser-group__card__wrapper">
                <h2 className="teaser-group__card__title">{name}</h2>
                <p>{description}</p>
              </div>
            </a>
          </CardPrimaryAction>
          <CardActions>
            <Button>{linkText}</Button>
          </CardActions>
        </Card>
      </div>
    </GridCell>
  )
}

export default function TeaserGroup({ items }) {
  return <Grid>{items.map(teaser => TeaserCard(teaser))}</Grid>
}
