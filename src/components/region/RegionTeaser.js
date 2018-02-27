import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

import RegionTeaserCard from './RegionTeaserCard.js'

const teaserRegions = [
  {
    name: 'Herne',
    name_ext: 'Kreisfreie Stadt',
    url: '/herne/',
    text:
      'Herne ist mit <strong>3.031 Einwohnern pro km²</strong> nach Berlin und München die am dichtesten bewohnte Region in Deutschland.'
  },
  {
    name: 'Passau',
    name_ext: 'Landkreis',
    url: '/passau/',
    text:
      'Im Landkreis Passau wohnen anteilsmäßig die meisten Frauen: <strong>Knapp 53 Pozent</strong>. Deutschlandweit sind es 50,6 Prozent.'
  },
  {
    name: 'Offenbach am Main',
    name_ext: 'Kreisfreie Stadt',
    url: '/offenbach-am-main/',
    text:
      'Offenbach ist die jüngste Stadt: <strong>Von 1000 Einwohnern sind 34 unter 3 Jahre alt</strong> – das sind acht Babies mehr als im Bundesschnitt.'
  }
]

const renderRegionTeaser = region => {
  return (
    <GridCell span="4" phone="12" tablet="4">
      <RegionTeaserCard key={region.name} region={region} />
    </GridCell>
  )
}

export default ({ data }) => (
  <div className="region-teaser">
    <Grid>{teaserRegions.map(region => renderRegionTeaser(region))}</Grid>
  </div>
)
