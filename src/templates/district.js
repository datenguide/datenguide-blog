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
                { x: 'male', y: district.bevstd.gesm },
                { x: 'female', y: district.bevstd.gesw }
              ]}
            />
          </VictoryChart>
        </GridCell>
      </Grid>

      <Grid>
        <GridCell span="8">
          <ul>
            <li>{district.Schulstatistik.Gymnasien.BIL003.BILKL2.JGSTUFE11}</li>
            <li>{district.Schulstatistik.Gymnasien.BIL003.BILKL2.JGSTUFE7}</li>
          </ul>

          <ul>
            <li>{district.Schulstatistik.Gymnasien.BIL003.GES.I}</li>
            <li>{district.Schulstatistik.Gymnasien.BIL003.GES.M}</li>
          </ul>

          <ul>
            <li>{district.Schulstatistik.Gymnasien.BIL003.NAT.NATA}</li>
          </ul>
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
      bevstd {
        gesm
        gesw
        t
      }
      Schulstatistik {
        Gymnasien {
          BIL003 {
            BILKL2 {
              JGSTUFE11
              JGSTUFE7
            }
            GES {
              I
              M
            }
            NAT {
              NATA
            }
          }
        }
      }
    }
  }
`
