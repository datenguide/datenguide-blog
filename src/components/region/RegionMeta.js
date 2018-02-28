import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { VictoryPie, VictoryChart, VictoryBar, VictoryTheme } from 'victory'

import VectorSquareIcon from 'mdi-react/VectorSquareIcon'
import MapMarkerIcon from 'mdi-react/MapMarkerIcon'
import MapMarkerMultipleIcon from 'mdi-react/MapMarkerMultipleIcon'
import _ from 'lodash'

import theme from '../../components/theme'

export default function RegionMeta({ region }) {
  const popData = _(region.BEVSTD.ALTX20.INSGESAMT.GEST__years)
    .mapValues((value, id) => ({
      x: id,
      y: parseInt(value, 10)
    }))
    .values()
    .sortBy(value => value.x)
    .value()

  return (
    <div className="region-meta">
      <Grid>
        <GridCell span="8">
          <h3>Bevölkerungsentwicklung</h3>
          <a href="#">Visualisierung</a> &nbsp;|&nbsp;
          <a href="#">Daten herunterladen</a>
          <VictoryChart
            theme={theme}
            padding={{ top: 20, bottom: 40, left: 60, right: 40 }}
          >
            <VictoryBar data={popData} />
          </VictoryChart>
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
          <div className="region-meta__listing">
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
