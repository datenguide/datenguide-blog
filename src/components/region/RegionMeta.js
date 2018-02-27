import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { VictoryPie } from 'victory'
import VectorSquareIcon from 'mdi-react/VectorSquareIcon'
import MapMarkerIcon from 'mdi-react/MapMarkerIcon'
import MapMarkerMultipleIcon from 'mdi-react/MapMarkerMultipleIcon'

import theme from '../../components/theme'

export default function RegionMeta({ region }) {
  return (
    <div className="region-meta">
      <Grid>
        <GridCell span="8">
          <div className="region-meta__demo">{region.BEVSTD.GEST}</div>
          <VictoryPie
            innerRadius={100}
            theme={theme}
            data={[
              { x: 'M', y: region.BEVSTD.GESM },
              { x: 'W', y: region.BEVSTD.GESW }
            ]}
          />
        </GridCell>
        <GridCell span="4">
          <div className="region-meta__geo">
            <h3>
              {region.name_ext} {region.name}
            </h3>
            <ul>
              <li>
                <VectorSquareIcon />
                {region.FLC006} km² Fläche
              </li>
              <li>
                <MapMarkerIcon />
                {region.geo.lat},{region.geo.lon}
              </li>
              <li>
                {' '}
                <MapMarkerMultipleIcon />
                {region.geo.bbox}
              </li>
            </ul>
          </div>
        </GridCell>
      </Grid>
    </div>
  )
}
