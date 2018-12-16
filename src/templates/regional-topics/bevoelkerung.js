import React from 'react'
import { graphql } from 'gatsby'
import { Grid, GridCell } from 'rmwc/Grid'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Hero from '../../components/Hero.js'
import Footer from '../../components/Footer'
import PageNavigation from '../../components/PageNavigation'
import PopulationDensity from '../../components/charts/PopulationDensity'
import PopulationDistribution from '../../components/charts/PopulationDistribution'

export default ({
  data: {
    site: { siteMetadata },
    regionDataLegacy: { region, comparison }
  },
  pageContext
}) => {
  const { regionMeta, name } = pageContext
  const { dataCredits, topics } = siteMetadata

  const navItems = topics.map(({ name, slug }) => ({
    path: `/${regionMeta.slug}/${slug}`,
    title: name
  }))

  return (
    <Layout>
      <div className="region">
        <Header />
        <Hero title={name} intro={regionMeta.name} />

        <Grid>
          <GridCell span="9">
            <h3>Bevölkerungsverteilung nach Altersgruppe</h3>
            <PopulationDistribution data={region} credits={dataCredits} />
            <h3>Bevölkerungsdichte (Einwohner pro km²)</h3>
            <PopulationDensity
              region={region}
              credits={dataCredits}
              comparison={comparison}
            />
          </GridCell>
          <GridCell span="3">
            <PageNavigation items={navItems} />
          </GridCell>
        </Grid>
        <Footer />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!, $comparison: String!) {
    site {
      siteMetadata {
        dataCredits {
          publisher
          licenseTitle
          licenseUrl
        }
        topics {
          slug
          name
        }
      }
    }

    regionDataLegacy: datenguideLegacy {
      region(id: $id) {
        ...PopulationDensity
        ...PopulationDistribution
      }
      comparison: region(id: $comparison) {
        ...PopulationDensity
      }
    }
  }
`
