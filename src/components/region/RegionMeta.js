import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { VictoryPie, VictoryChart, VictoryTheme } from 'victory'
import VectorSquareIcon from 'mdi-react/VectorSquareIcon'
import MapMarkerIcon from 'mdi-react/MapMarkerIcon'
import MapMarkerMultipleIcon from 'mdi-react/MapMarkerMultipleIcon'

import theme from '../../components/theme'
import PopulationOverTime from '../charts/PopulationOverTime'

import '../../scss/components/region-meta.scss'

export default function RegionMeta({ region, meta }) {
  return (
    <div className="region-meta">
      <Grid>
        <GridCell span="8">
          <div dangerouslySetInnerHTML={{ __html: meta.html }} />

          <h3>Bevölkerungsentwicklung</h3>
          <PopulationOverTime data={region} />

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
                <MapMarkerMultipleIcon />
                [{region.geo && region.geo.bbox.join(', ')}]
              </li>
            </ul>
          </div>
        </GridCell>
      </Grid>
    </div>
  )
}

export const query = graphql`
  fragment population on Region {
    BEVSTD {
      ALTX20 {
        INSGESAMT {
          GEST__years {
            _1995
            _1996
            _1997
            _1998
            _1999
            _2000
            _2001
            _2002
            _2003
            _2004
            _2005
            _2006
            _2007
            _2008
            _2009
            _2010
            _2011
            _2012
            _2013
            _2014
            _2015
          }
        }
      }
    }
  }
`
