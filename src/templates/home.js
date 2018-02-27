import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Funders from '../components/Funders'
import Footer from '../components/Footer'
import RegionTeaser from '../components/region/RegionTeaser.js'

const teaserRegions = [
  {
    name: 'Herne',
    name_ext: 'Kreisfreie Stadt',
    url: '/herne/',
    text:
      'Herne im Ruhrbeiet ist mit <strong>3.031 Einwohnern pro km²</strong> nach Berlin und München die am dichtesten bewohnte Region in Deutschland.'
  },
  {
    name: 'Herne',
    name_ext: 'Kreisfreie Stadt',
    url: '/herne/',
    text:
      'Herne im Ruhrbeiet ist mit <strong>3.031 Einwohnern pro km²</strong> nach Berlin und München die am dichtesten bewohnte Region in Deutschland.'
  },
  {
    name: 'Herne',
    name_ext: 'Kreisfreie Stadt',
    url: '/herne/',
    text:
      'Herne im Ruhrbeiet ist mit <strong>3.031 Einwohnern pro km²</strong> nach Berlin und München die am dichtesten bewohnte Region in Deutschland.'
  }
]

const renderRegionTeaser = region => {
  return (
    <GridCell span="4" phone="12" tablet="4">
      <RegionTeaser key={region.name} region={region} />
    </GridCell>
  )
}

export default ({ data }) => {
  const page = data.markdownRemark
  const regions = data.allRegion

  return (
    <div>
      <Header />

      <Hero regions={regions} tagline={page.frontmatter.intro} />

      <Grid>{teaserRegions.map(region => renderRegionTeaser(region))}</Grid>

      <Grid>
        <GridCell span="8">
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </GridCell>
      </Grid>

      <Grid>
        <GridCell span="6">
          <Funders />
        </GridCell>
      </Grid>

      <Newsletter />

      <Footer />
    </div>
  )
}

export const query = graphql`
  query HomeQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        intro
      }
    }
    allRegion {
      ...RegionsFragment
    }
  }
`
