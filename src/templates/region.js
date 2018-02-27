import React from 'react'
import GatsbyLink from 'gatsby-link'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import { Grid, GridCell } from 'rmwc/Grid'
import { VictoryBar, VictoryChart } from 'victory'

import Header from '../components/Header'
import RegionHeader from '../components/region/RegionHeader.js'
import RegionMeta from '../components/region/RegionMeta.js'
import Footer from '../components/Footer'
import theme from '../components/theme'

export default ({ data }) => {
  const { region } = data

  return (
    <div className="region">
      <Header />
      <RegionHeader region={region} />
      <RegionMeta region={region} />
      <Grid>
        <GridCell span="7">
          <h3>Arbeit und Soziales</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
          <GatsbyLink to={`${region.slug}/arbeit`}>
            <ArrowRightIcon />
            Mehr Daten zum Thema Arbeit
          </GatsbyLink>
        </GridCell>
        <GridCell span="5">
          <VictoryChart domainPadding={50} theme={theme}>
            <VictoryBar
              data={[
                { x: 'A', y: region.BEVSTD.GESM },
                { x: 'B', y: region.BEVSTD.GESW }
              ]}
            />
          </VictoryChart>
        </GridCell>
      </Grid>
      <hr />
      <Grid>
        <GridCell span="7">
          <h3>Bildung</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
          <GatsbyLink to={`${region.slug}/bildung`}>
            <ArrowRightIcon />
            Mehr Daten zum Thema Bildung
          </GatsbyLink>
        </GridCell>
        <GridCell span="5">
          <VictoryChart domainPadding={50}>
            <VictoryBar
              data={[
                { x: 'A', y: region.BEVSTD.GESM },
                { x: 'B', y: region.BEVSTD.GESW }
              ]}
            />
          </VictoryChart>
        </GridCell>
      </Grid>
      <hr />
      <Grid>
        <GridCell span="7">
          <h3>Gesundheit</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
          <GatsbyLink to={`${region.slug}/gesundheit`}>
            <ArrowRightIcon />
            Mehr Daten zum Thema Gesundheit
          </GatsbyLink>
        </GridCell>
        <GridCell span="5">
          <VictoryChart domainPadding={50}>
            <VictoryBar
              data={[
                { x: 'A', y: region.BEVSTD.GESM },
                { x: 'B', y: region.BEVSTD.GESW }
              ]}
            />
          </VictoryChart>
        </GridCell>
      </Grid>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query RegionQuery($slug: String!) {
    region(slug: { eq: $slug }) {
      id
      name
      name_ext
      slug
      geo {
        lat
        lon
        bbox
      }
      FLC006
      BEVSTD {
        GESM
        GESW
        GEST
      }
    }
  }
`
