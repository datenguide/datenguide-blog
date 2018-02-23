import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { Button } from 'rmwc/Button'
import { VictoryBar, VictoryChart } from 'victory'

import Header from '../components/Header'
import DistrictHeader from '../components/district/DistrictHeader.js'
import Footer from '../components/Footer'

export default ({ data }) => {
  const { district } = data

  return (
    <div className="district">
      <Header />
      <DistrictHeader district={district} />
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
          <Button stroked href="./arbeit">
            Mehr Daten zum Thema Arbeit
          </Button>
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
          <Button stroked href="./bildung">
            Mehr Daten zum Thema Bildung
          </Button>
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
          <Button stroked href="./gesundheit">
            Mehr Daten zum Thema Gesundheit
          </Button>
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
      }
    }
  }
`
