import Link from 'gatsby-link';
import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';

import { Article } from '../components/article/article';
import { Container } from '../components/container/container';
import { Header } from '../components/header/header';
import Main from '../components/main/main';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <div>
        <Header type="small" />
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Container type="narrow">
          <Main>
            <Article
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              content={post.html}
              type="single"
            />

            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
              }}
            >
              {previous && (
                <li>
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}

              {next && (
                <li>
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>
          </Main>
        </Container>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
