import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { graphql, Link } from 'gatsby'

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
    langSwitch,
    metaImage,
    description,
    signup
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

      <Header>
        <Link className="header__nav-item" to={langSwitch.link}>
          {langSwitch.name}
        </Link>
      </Header>

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
              <a
                className="event__meta__link"
                href={signup.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {signup.name}
              </a>
            </li>
            <li className="event__meta__venue">
              <MapMarkerIcon aria-hidden="true" />
              {venue.name}
              <a
                className="event__meta__link"
                href={venue.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {venue.address}
              </a>
            </li>
          </ul>
          <iframe
            title={venue.name}
            aria-label="Locator Maps"
            id="datawrapper-chart-GohdQ"
            src="//datawrapper.dwcdn.net/GohdQ/3/"
            scrolling="no"
            frameBorder="0"
            style={{ width: 0, minWidth: '100%' }}
            height="260"
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
        langSwitch {
          link
          name
        }
        signup {
          url
          name
        }
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
