import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { VictoryPie, VictoryChart, VictoryTheme } from 'victory'

import VectorSquareIcon from 'mdi-react/VectorSquareIcon'
import MapMarkerIcon from 'mdi-react/MapMarkerIcon'
import MapMarkerMultipleIcon from 'mdi-react/MapMarkerMultipleIcon'
import _ from 'lodash'

import theme from '../../components/theme'
import Chart from './chart'

export default function RegionMeta({ region }) {
  return (
    <div className="region-meta">
      <Grid>
        <GridCell span="8">
          <h3>Bevölkerungsentwicklung</h3>
          <a href="#">Visualisierung</a> &nbsp;|&nbsp;
          <a href="#">Daten herunterladen</a>
          <Chart data={region.BEVSTD.ALTX20.INSGESAMT.GEST__years} />
          <div className="region-meta__demo">
            {region.BEVSTD.GEST} Einwohner
            <div className="region-meta__donut">
              <VictoryPie
                innerRadius={40}
                width={150}
                height={150}
                theme={theme}
                data={[
                  { x: 'M', y: +region.BEVSTD.GESM },
                  { x: 'W', y: +region.BEVSTD.GESW }
                ]}
              />
            </div>
          </div>
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
