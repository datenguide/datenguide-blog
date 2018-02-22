import React from 'react'
import Tooltip from './Tooltip.js'

class DistrictHeader extends React.Component {
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

    const { lon, lat, bbox } = this.props.district.geo
    const id = this.props.district.id

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/datenguide/cjdywdhi39bik2sqdt6itqz73',
      center: [parseFloat(lon), parseFloat(lat)],
      zoom: 9
    })

    map.scrollZoom.disable()
    map.addControl(new mapboxgl.NavigationControl(), 'top-left')

    map.on('load', () => {
      const width = this.mapContainer.clientWidth

      if (bbox) {
        map.fitBounds(bbox.split(','), {
          padding: 40,
          offset: [width / 4, 0] // offset to make space for title
        })
      }

      map.addSource('districts-data', {
        type: 'vector',
        url: 'mapbox://datenguide.b68f2wxj'
      })

      map.addLayer({
        // https://www.mapbox.com/mapbox-gl-js/example/data-driven-circle-colors/
        id: 'districts-layer',
        source: 'districts-data',
        'source-layer': 'landkreise_sim20-97ng3s',
        type: 'fill',
        paint: {
          'fill-color': ['match', ['get', 'id'], id, 'transparent', '#44707f'],
          'fill-opacity': 0.3
        }
      })

      map.addLayer({
        // https://www.mapbox.com/mapbox-gl-js/example/data-driven-circle-colors/
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
          'line-opacity': 0.5
        }
      })

      const triggerMouseMove = ({ point, features }) => {
        const feature = features[0]
        feature && console.log(feature.properties.id)
        this.setState({
          showTooltip: true,
          hoverPosition: point,
          hoverName: feature.properties.GEN
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
    const { hoverPosition, hoverName, showTooltip } = this.state
    return (
      <header className="district__header">
        <div
          ref={el => (this.mapContainer = el)}
          className="absolute top right left bottom"
        />
        <Tooltip
          position={hoverPosition}
          name={hoverName}
          visible={showTooltip}
        />
      </header>
    )
  }
}

export default DistrictHeader
