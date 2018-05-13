import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';

import { Article } from '../components/article/article';
import { Container } from '../components/container/container';
import { Header } from '../components/header/header';
import { SectionTitle } from '../components/section-title/section-title';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Header />
        <Container type="narrow">
          <Helmet title={siteTitle} />
          <SectionTitle>
            <span>Articles</span>
          </SectionTitle>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <Article
                key={node.fields.slug}
                link={node.fields.slug}
                title={title}
                date={node.frontmatter.date}
                content={node.excerpt}
              />
            )
          })}
        </Container>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
