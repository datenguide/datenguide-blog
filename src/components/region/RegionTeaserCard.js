import React from 'react'
import { Link } from 'gatsby'
import {
  Card,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from 'rmwc/Card'
import { Typography } from 'rmwc/Typography'

import theme from '../../components/theme'

export default function RegionTeaserCard({ region }) {
  return (
    <div className="region-teaser__card">
      <Card>
        <div className="mdc-card__primary-action">
          <Link to={region.url}>
            <div style={{ padding: '0 1rem 1rem 1rem' }}>
              <Typography use="display1" tag="h1">
                {region.name}
              </Typography>
              <Typography
                use="subheading1"
                tag="h3"
                theme="text-secondary-on-background"
                style={{ marginTop: '-1rem' }}
              >
                {region.name_ext}
              </Typography>
              <Typography
                use="body1"
                tag="div"
                theme="text-primary-on-background"
              >
                <p dangerouslySetInnerHTML={{ __html: region.text }} />
              </Typography>
            </div>
          </Link>
        </div>
      </Card>
    </div>
  )
}
