import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { graphql } from 'gatsby'

import PageMeta from '../components/PageMeta'
import Layout from '../components/Layout'
import Header from '../components/Header'
import HeroEvent from '../components/HeroEvent'
import Newsletter from '../components/Newsletter'
import Schedule from '../components/Schedule'
import TeaserGroup from '../components/TeaserGroup'
import Footer from '../components/Footer'
import DateRangeIcon from 'mdi-react/DateRangeIcon'
import MapMarkerIcon from 'mdi-react/MapMarkerIcon'

import '../scss/components/_event.scss'

export default ({ data, location }) => {
  const { html, frontmatter } = data.markdownRemark
  const {
    title,
    tagline,
    meta,
    longDate,
    venue,
    teasers,
    schedule,
    lang,
    metaImage,
    description
  } = frontmatter

  return (
    <Layout className="event">
      <PageMeta
        lang={lang}
        pathname={location.pathname}
        title={title}
        description={description}
        image={metaImage}
      />

      <Header />

      <HeroEvent title={title} tagline={tagline} meta={meta} />

      <Grid>
        <GridCell span="8" className="event__main">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </GridCell>

        <GridCell span="4">
          <ul className="event__meta">
            <li className="event__meta__date">
              <DateRangeIcon aria-hidden="true" />
              {longDate}
            </li>
            <li className="event__meta__venue">
              <MapMarkerIcon aria-hidden="true" />
              {venue.name}
              <a className="event__meta__address" href={venue.url}>
                {venue.address}
              </a>
            </li>
          </ul>
          <iframe
            title=""
            aria-label="Locator Maps"
            id="datawrapper-chart-GohdQ"
            src="//datawrapper.dwcdn.net/GohdQ/3/"
            scrolling="no"
            frameborder="0"
            style={{ width: 0, 'min-width': '100%' }}
            height="270"
          />
        </GridCell>
      </Grid>

      <div className="event__teaser">
        <Grid>
          <GridCell span="12" className="event__main">
            <h2>{teasers.title}</h2>
            <p>{teasers.intro}</p>
          </GridCell>
        </Grid>
        <TeaserGroup items={teasers.items} />
      </div>

      <Grid>
        <GridCell span="8">
          <Schedule dates={schedule} />
        </GridCell>
      </Grid>

      <Newsletter />

      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tagline
        meta
        longDate
        lang
        description
        metaImage
        venue {
          name
          address
          url
        }
        schedule {
          date
          items {
            time
            name
            content
          }
        }
        teasers {
          title
          intro
          items {
            name
            description
            link
            linkText
            image
          }
        }
      }
    }
  }
`
