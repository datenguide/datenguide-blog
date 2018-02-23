import React from 'react'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import GatsbyLink from 'gatsby-link'
import { Toolbar, ToolbarRow, ToolbarSection } from 'rmwc/Toolbar'
import { Grid, GridCell } from 'rmwc/Grid'
import { VictoryBar, VictoryChart } from 'victory'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default ({ data, pathContext }) => {
  const { district } = data

  return (
    <div className="district">
      <Header category={pathContext.category} />

      <Toolbar>
        <ToolbarRow>
          <ToolbarSection alignStart>
            <GatsbyLink to={pathContext.slug}>
              <ArrowLeftIcon />
              {district.name}
            </GatsbyLink>
          </ToolbarSection>
        </ToolbarRow>
      </Toolbar>

      <Grid>
        <GridCell span="12">
          <h1>
            {district.name.toUpperCase()}&nbsp;/&nbsp;
            {pathContext.category.toUpperCase()}
          </h1>
        </GridCell>
        <GridCell span="7">
          <h3>Lorem Ipsum</h3>
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
        </GridCell>
        <GridCell span="5">
          <VictoryChart domainPadding={50}>
            <VictoryBar
              data={[
                { x: 'male', y: district.BEVSTD.GESM },
                { x: 'female', y: district.BEVSTD.GESW }
              ]}
            />
          </VictoryChart>
        </GridCell>
      </Grid>
      <hr />
      <Grid>
        <GridCell span="5">
          <VictoryChart domainPadding={50}>
            <VictoryBar
              data={[
                { x: 'male', y: district.BEVSTD.GESM },
                { x: 'female', y: district.BEVSTD.GESW }
              ]}
            />
          </VictoryChart>
        </GridCell>
        <GridCell span="7">
          <h3>Lorem Ipsum</h3>
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
        </GridCell>
      </Grid>
      <hr />
      <Grid>
        <GridCell span="7">
          <h3>Lorem Ipsum</h3>
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
        </GridCell>
        <GridCell span="5">
          <VictoryChart domainPadding={50}>
            <VictoryBar
              data={[
                { x: 'male', y: district.BEVSTD.GESM },
                { x: 'female', y: district.BEVSTD.GESW }
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
  query CategoryQuery($slug: String!) {
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
