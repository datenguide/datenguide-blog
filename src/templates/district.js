import React from 'react'
import DistrictHeader from '../components/district/DistrictHeader.js'

export default ({ data }) => {
  const { district } = data

  return (
    <div>
      <DistrictHeader district={district} />

      <h1>{district.name}</h1>
      <em>
        lat: {district.geo.lat}, lon: {district.geo.lon}, bbox:{' '}
        {district.geo.bbox}
      </em>
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
      FLC006
      BEVSTD {
        GESM
        GESW
        GEST
      }
      BILSA8 {
        Gymnasien {
          BIL003 {
            BILKL2 {
              JGSTUFE11
              JGSTUFE7
            }
          }
        }
      }
    }
  }
`
