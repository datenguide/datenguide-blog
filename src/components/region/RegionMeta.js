import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { VictoryPie, VictoryChart, VictoryTheme } from 'victory'
import VectorSquareIcon from 'mdi-react/VectorSquareIcon'
import MapMarkerIcon from 'mdi-react/MapMarkerIcon'
import MapMarkerMultipleIcon from 'mdi-react/MapMarkerMultipleIcon'

import theme from '../../components/theme'
import PopulationOverTime from '../charts/PopulationOverTime'
import PopulationDistribution from '../charts/PopulationDistribution'

import '../../scss/components/region-meta.scss'

export default function RegionMeta({ region, meta }) {
  return (
    <div className="region-meta">
      <Grid>
        <GridCell span="8">
          <div dangerouslySetInnerHTML={{ __html: meta.html }} />
          <small className="region-meta__source">
            Einleitung adaptiert von{' '}
            <a href={meta.frontmatter.source_url}>
              Wikipedia, der freien Enzyklopädie
            </a>. Veröffentlicht unter einer{' '}
            <a href="https://de.wikipedia.org/wiki/Wikipedia:Lizenzbestimmungen_Creative_Commons_Attribution-ShareAlike_3.0_Unported">
              CC BY-SA Lizenz
            </a>.
          </small>

          <h3>Bevölkerungsentwicklung</h3>
          <PopulationOverTime data={region} />

          <h3>Bevölkerungsverteilung</h3>
          <PopulationDistribution data={region} />
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
