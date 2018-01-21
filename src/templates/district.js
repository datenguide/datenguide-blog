import React from 'react'

export default ({ data }) => {
  const {district} = data

  return (
    <div>
      <h1>{district.name}</h1>

      <ul>
        <li>{district.name_ext}</li>
        <li>{district.pop.m} / {district.pop.w}</li>
      </ul>

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
      area
      pop {
        m
        w
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
