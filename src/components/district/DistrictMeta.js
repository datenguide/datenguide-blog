import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { VictoryPie } from 'victory'

import theme from '../../components/theme'

export default function DistrictMeta({ district }) {
  return (
    <div className="district-meta">
      <Grid>
        <GridCell span="8">
          <div className="district-meta__demo">{district.BEVSTD.GEST}</div>
          <VictoryPie
            innerRadius={100}
            theme={theme}
            data={[
              { x: 'M', y: district.BEVSTD.GESM },
              { x: 'W', y: district.BEVSTD.GESW }
            ]}
          />
        </GridCell>
        <GridCell span="4">
          <div className="district-meta__geo">
            <p>
              {district.geo.lat} / {district.geo.lon}
            </p>
          </div>
        </GridCell>
      </Grid>
    </div>
  )
}
