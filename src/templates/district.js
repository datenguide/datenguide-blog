import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import Header from '../components/Header'
import { VictoryBar, VictoryChart } from 'victory'

export default ({ data }) => {
  const { district } = data

  return (
    <div className="district">
      <Header />

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
      BEVSTD {
        GESM
        GESW
      }
    }
  }
`
