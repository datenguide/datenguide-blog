import React from 'react'
import { Link } from 'gatsby'

import '../scss/components/article-list.scss'

export default function ArticleList({ articles }) {
  return (
    <section className="article-list">
      <h2>Aktuelles</h2>
      <ul>
        {articles.edges.map(
          ({ node: { fields, frontmatter } }) =>
            !frontmatter.hidden && (
              <li className="article-list__item" key={fields.slug}>
                <Link className="article-list__link" to={`/${fields.slug}`}>
                  <time className="article-list__date">{frontmatter.date}</time>
                  <h3 className="article-list__title">{frontmatter.title}</h3>
                  <p className="article-list__description">
                    {frontmatter.description}
                  </p>
                </Link>
              </li>
            )
        )}
      </ul>
    </section>
  )
}

export const query = graphql`
  fragment ArticleList on Query {
    articleList: allMarkdownRemark(
      filter: { fields: { slug: { regex: "//blog/..*$/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            description
            hidden
          }
        }
      }
    }
  }
`
