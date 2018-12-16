import React from 'react'
import { graphql } from 'gatsby'
import { Grid, GridCell } from 'rmwc/Grid'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Hero from '../../components/Hero.js'
import Footer from '../../components/Footer'
import PageNavigation from '../../components/PageNavigation'
import EuropeanElections from '../../components/charts/EuropeanElections'

export default ({
  data: {
    regionData: { region },
    site: { siteMetadata }
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
            <h3>Ergebnisse Europawahl (Zweitstimmen)</h3>
            <EuropeanElections data={region} credits={dataCredits} />
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
  query($id: String!) {
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

    regionData: datenguide {
      # TODO: Update queries once v2 API is finalized.
      # (These may currently not return what you think they do)
      region(id: $id) {
        # TODO: Move these into a ...EuropeanElections fragment:
        AI0601 {
          value
          year
        }
        AI0602 {
          value
          year
        }
        AI0603 {
          value
          year
        }
        AI0604 {
          value
          year
        }
        AI0605 {
          value
          year
        }
        AI0606 {
          value
          year
        }
      }
    }
  }
`
