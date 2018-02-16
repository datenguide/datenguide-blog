import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { VictoryBar, VictoryChart } from 'victory'

import Header from '../components/Header'
import DistrictHeader from '../components/district/DistrictHeader.js'

export default ({ data }) => {
  const { district } = data

  return (
    <div className="district">
      <Header />
      <DistrictHeader district={district} />

      <Grid>
        <GridCell span="8">
          <h1>{district.name}</h1>
          <p>{district.name_ext}</p>
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
