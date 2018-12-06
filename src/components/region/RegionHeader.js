import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import mapboxgl from 'mapbox-gl'
import { graphql } from 'gatsby'
import { find } from 'lodash'

import Tooltip from './Tooltip.js'

import '../../scss/components/region-header.scss'

class RegionHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showTooltip: false,
      hoverPosition: { x: 0, y: 0 },
      hoverName: null
    }
  }

  componentDidMount() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZGF0ZW5ndWlkZSIsImEiOiJjamRmcjdmeGUwYXBrMnhwZ2V3ZnUyZGJpIn0.0S5TQa_lEc9PmWihbA4VBw'

    const { geo, id } = this.props.regionHeader.frontmatter

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/datenguide/cjdywdhi39bik2sqdt6itqz73',
      zoom: 9
    })

    map.scrollZoom.disable()
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    map.on('load', () => {
      const width = this.mapContainer.clientWidth

      if (geo.bbox) {
        map.fitBounds(geo.bbox, {
          padding: 40,
          duration: 0,
          offset: [width / 4, 0] // offset to make space for title
        })
      }

      map.addSource('districts-data', {
        type: 'vector',
        url: 'mapbox://datenguide.b68f2wxj'
      })

      map.addLayer({
        id: 'districts-layer',
        source: 'districts-data',
        'source-layer': 'landkreise_sim20-97ng3s',
        type: 'fill',
        paint: {
          'fill-color': ['match', ['get', 'id'], id, 'transparent', '#44707f'],
          'fill-opacity': 0.4
        }
      })

      map.addLayer({
        id: 'districts-border-layer',
        source: 'districts-data',
        'source-layer': 'landkreise_sim20-97ng3s',
        type: 'line',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#44707f',
          'line-width': 3,
          'line-opacity': 0.4
        }
      })

      const triggerMouseMove = ({ point, features }) => {
        const feature = features[0]
        feature &&
          this.setState({
            showTooltip: true,
            hoverPosition: point,
            hoverId: feature.properties.id
          })
      }

      const triggerMouseClick = ({ features }) => {
        const feature = features[0]
        console.log('click')
        feature && console.log(feature.properties.id)
      }

      map.on('mousemove', 'districts-layer', e => triggerMouseMove(e))
      map.on('click', 'districts-layer', e => triggerMouseClick(e)) // FIXME
      map.on('mouseleave', 'districts-laver', () =>
        this.setState({ showTooltip: false })
      )
    })
  }

  render() {
    const { hoverPosition, hoverId, showTooltip } = this.state
    const { state, name } = this.props.regionHeader.frontmatter
    const tooltipRegion = this.props.regions.edges.find(
      ({ node }) => node.frontmatter.id == hoverId
    )

    return (
      <header className="region-header">
        <div
          ref={el => (this.mapContainer = el)}
          className="absolute top right left bottom"
        />
        <div className="region-header__hgroup">
          <Grid>
            <GridCell span="7">
              <h1>{name}</h1>
              <p>{state && state.name}</p>
            </GridCell>
          </Grid>
        </div>
        {tooltipRegion && (
          <Tooltip
            position={hoverPosition}
            name={tooltipRegion.name}
            visible={showTooltip}
          />
        )}
      </header>
    )
  }
}

export const query = graphql`
  fragment regionHeader on Query {
    regionHeader: markdownRemark(frontmatter: { id: { eq: $id } }) {
      frontmatter {
        id
        name
        state {
          name
        }
        geo {
          bbox
        }
      }
    }
    regions: allMarkdownRemark(
      filter: { fields: { slug: { regex: "//regions/..*$/" } } }
      sort: { fields: [frontmatter___slug], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            id
            slug
            name
            name_ext
          }
        }
      }
    }
  }
`

export default RegionHeader
