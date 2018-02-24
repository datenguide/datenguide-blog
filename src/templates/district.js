import React from 'react'
import GatsbyLink from 'gatsby-link'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import { Grid, GridCell } from 'rmwc/Grid'
import { VictoryBar, VictoryChart } from 'victory'

import Header from '../components/Header'
import DistrictHeader from '../components/district/DistrictHeader.js'
import DistrictMeta from '../components/district/DistrictMeta.js'
import Footer from '../components/Footer'
import theme from '../components/theme'

export default ({ data }) => {
  const { district } = data

  return (
    <div className="district">
      <Header />
      <DistrictHeader district={district} />
      <DistrictMeta district={district} />
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
          <GatsbyLink to={`${district.slug}/arbeit`}>
            <ArrowRightIcon />
            Mehr Daten zum Thema Arbeit
          </GatsbyLink>
        </GridCell>
        <GridCell span="5">
          <VictoryChart domainPadding={50} theme={theme}>
            <VictoryBar
              data={[
                { x: 'A', y: district.BEVSTD.GESM },
                { x: 'B', y: district.BEVSTD.GESW }
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
          <GatsbyLink to={`${district.slug}/bildung`}>
            <ArrowRightIcon />
            Mehr Daten zum Thema Bildung
          </GatsbyLink>
        </GridCell>
        <GridCell span="5">
          <VictoryChart domainPadding={50}>
            <VictoryBar
              data={[
                { x: 'A', y: district.BEVSTD.GESM },
                { x: 'B', y: district.BEVSTD.GESW }
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
          <GatsbyLink to={`${district.slug}/gesundheit`}>
            <ArrowRightIcon />
            Mehr Daten zum Thema Gesundheit
          </GatsbyLink>
        </GridCell>
        <GridCell span="5">
          <VictoryChart domainPadding={50}>
            <VictoryBar
              data={[
                { x: 'A', y: district.BEVSTD.GESM },
                { x: 'B', y: district.BEVSTD.GESW }
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
  query DistrictQuery($slug: String!) {
    district(slug: { eq: $slug }) {
      id
      name
      name_ext
      slug
      geo {
        lat
        lon
        bbox
      }
      BEVSTD {
        GESM
        GESW
        GEST
      }
    }
  }
`
