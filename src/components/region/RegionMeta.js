import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import VectorSquareIcon from 'mdi-react/VectorSquareIcon'
import MapMarkerMultipleIcon from 'mdi-react/MapMarkerMultipleIcon'
import GenderMaleFemaleIcon from 'mdi-react/GenderMaleFemaleIcon'
import AccountMultipleIcon from 'mdi-react/AccountMultipleIcon'

import PopulationDensity from '../charts/PopulationDensity'
import PopulationDistribution from '../charts/PopulationDistribution'

import '../../scss/components/region-meta.scss'

const numberFormat = Intl.NumberFormat('de').format

export default function RegionMeta({ region, meta, credits, comparison }) {
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
        </GridCell>

        <GridCell span="4">
          <h3>
            {region.name_ext} {region.name}
          </h3>
          <div className="region-meta__listing">
            <ul>
              <li>
                <MapMarkerMultipleIcon />
                [{region.geo && region.geo.bbox.join(', ')}]
              </li>
            </ul>
          </div>
        </GridCell>

        <GridCell span="8">
          <h3>Bevölkerungsdichte (Einwohner pro km²)</h3>
          <PopulationDensity
            region={region}
            credits={credits}
            comparison={comparison}
          />

          <h3>Bevölkerungsverteilung nach Altersgruppe</h3>
          <PopulationDistribution data={region} credits={credits} />
        </GridCell>

        <GridCell span="4">
          <div className="region-meta__listing">
            <div className="region-meta__highlight">
              <h2> Einwohnerzahl 2017</h2>

              <b>{numberFormat(region.BEVSTD.GEST)}</b>
            </div>
            <ul>
              <li>
                <VectorSquareIcon />
                {region.FLC006} km² Fläche
              </li>
              <li>
                <AccountMultipleIcon />
                {numberFormat(
                  Math.round(+region.BEVSTD.GEST / +region.FLC006)
                )}{' '}
                Einwohner pro km²
              </li>
              <li>
                <GenderMaleFemaleIcon />
                {numberFormat(
                  Math.round((100 / region.BEVSTD.GEST) * region.BEVSTD.GESW)
                )}
                % weiblich
                {' / '}
                {numberFormat(
                  Math.round((100 / region.BEVSTD.GEST) * region.BEVSTD.GESM)
                )}
                % männlich
              </li>
            </ul>
          </div>
        </GridCell>
      </Grid>
    </div>
  )
}
