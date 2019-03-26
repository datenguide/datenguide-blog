import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import HeroEvent from '../components/HeroEvent'
import Newsletter from '../components/Newsletter'
import Schedule from '../components/Schedule'
import TeaserGroup from '../components/TeaserGroup'
import Funders from '../components/Funders'
import Footer from '../components/Footer'

import '../scss/components/_event.scss'

export default ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  const { title, tagline, meta, venue, teasers, schedule } = frontmatter

  return (
    <Layout className="event">
      <Header />

      <HeroEvent title={title} tagline={tagline} meta={meta} />

      <Grid>
        <GridCell span="8" className="event__main">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </GridCell>

        <GridCell span="4">
          <h4>{venue.name}</h4>
          <a href={venue.url}>{venue.address}</a>
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
