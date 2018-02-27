import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { VictoryPie } from 'victory'

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
            <p>
              {region.geo.lat} / {region.geo.lon}
            </p>
          </div>
        </GridCell>
      </Grid>
    </div>
  )
}
