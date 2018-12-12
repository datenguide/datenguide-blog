import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import VectorSquareIcon from 'mdi-react/VectorSquareIcon'
import MapMarkerMultipleIcon from 'mdi-react/MapMarkerMultipleIcon'
import AccountMultipleIcon from 'mdi-react/AccountMultipleIcon'

import '../../scss/components/region-meta.scss'

const numberFormat = Intl.NumberFormat('de').format

export default function RegionMeta({
  regionMeta: { frontmatter, html },
  regionData: { region }
}) {
  const { geo, name, name_ext, source_url } = frontmatter
  const bevst6 = region.BEVST6[0] && region.BEVST6[0].value
  const flc006 = region.FLC006[0] && region.FLC006[0].value

  return (
    <div className="region-meta">
      <Grid>
        <GridCell span="8">
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <small className="region-meta__source">
            Einleitung adaptiert von{' '}
            <a href={source_url}>Wikipedia, der freien Enzyklopädie</a>.
            Veröffentlicht unter einer{' '}
            <a href="https://de.wikipedia.org/wiki/Wikipedia:Lizenzbestimmungen_Creative_Commons_Attribution-ShareAlike_3.0_Unported">
              CC BY-SA Lizenz
            </a>
            .
          </small>
        </GridCell>

        <GridCell span="4">
          <h3>
            {name_ext} {name}
          </h3>
          <div className="region-meta__listing">
            <ul>
              <li>
                <MapMarkerMultipleIcon />[{geo && geo.bbox.join(', ')}]
              </li>
            </ul>
          </div>
        </GridCell>

        <GridCell span="8">
          <h3>Bevölkerungsdichte (Einwohner pro km²)</h3>
          <p>
            Die Bevölkerungsdichte ist mittlere Anzahl der Einwohner pro
            Quadratkilometer für ein bestimmtes Gebiet. Sie kann errechnet
            werden, indem man die Einwohnerzahl durch die Fläche des Gebietes
            teilt. In dieser Grafik vergleichen wir {name} mit München, der
            Stadt mit der höchsten Bevölkerungsdichte in Deutschland.
          </p>
        </GridCell>

        <GridCell span="4">
          <div className="region-meta__listing">
            <div className="region-meta__highlight">
              <h2> Einwohnerzahl 2017</h2>
              <b>{numberFormat(bevst6)}</b>
            </div>
            <ul>
              <li>
                <VectorSquareIcon />
                {flc006} km² Fläche
              </li>
              <li>
                <AccountMultipleIcon />
                {numberFormat(Math.round(+bevst6 / +flc006))} Einwohner pro km²
              </li>
            </ul>
          </div>
        </GridCell>
      </Grid>
    </div>
  )
}

export const query = graphql`
  fragment regionMeta on Query {
    regionMeta: markdownRemark(frontmatter: { id: { eq: $id } }) {
      html
      frontmatter {
        slug
        source_url
        id
        name
        name_ext
        geo {
          bbox
        }
      }
    }
    regionData: datenguide {
      # TODO: Update queries once v2 API is finalized.
      # (These may currently not return what you think they do)
      region(id: $id) {
        BEVST6(year: "2016") {
          value
        }
        FLC006(year: "2016") {
          value
        }
      }
    }
  }
`
