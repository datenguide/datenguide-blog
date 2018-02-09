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

      <ul>
        <li>{district.name_ext}</li>
        <li>
          {district.bevstd.gesm} / {district.bevstd.gesw}
        </li>
      </ul>

      <ul>
        <li>{district.Schulstatistik.Gymnasien.BIL003.BILKL2.JGSTUFE11}</li>
        <li>{district.Schulstatistik.Gymnasien.BIL003.BILKL2.JGSTUFE7}</li>
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
      geo {
        lat
        lon
        bbox
      }
      flc006
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
          }
        }
      }
    }
  }
`
