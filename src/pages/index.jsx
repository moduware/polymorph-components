import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import CtaButton from '../components/CtaButton'
import Navigation from '../components/Layout/Navigation'

class Index extends React.Component {
  render() {
    const allSEOMarkdown = this.props.data.allMarkdown.edges

    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={allSEOMarkdown} />
        <main>
          <IndexHeadContainer>
            <Navigation />
            <Hero>
              <img src={config.siteLogo} width="150px" alt="moduware logo" />
              <h1>{config.siteTitle}</h1>
              <h4>{config.siteDescription}</h4>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            <h2>List of Polymorph Elements</h2>
            <p>
              A collection of polymorph elements with their documentation and usage examples.{' '}
            </p>
            <CtaButton to={'/lesson-one'}>See Our First Element</CtaButton>

            <div className="contributors">
              <p>
                Created by Moduware.{' '}
                <a href="https:twitter.com/moduwareinc">
                  You should follow us on Twitter.
                </a>{' '}
                Also, <a href="https://github.com/moduware">Moduware</a> for
                our github profile.
              </p>
            </div>
          </BodyContainer>
        </main>
      </div>
    )
  }
}

export default Index

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.brand};
  padding: ${props => props.theme.sitePadding};
  text-align: center;
  color: white;
`

const Hero = styled.div`
  padding: 50px 0;
  & > h1 {
    font-weight: 600;
  }
  & > img {
    border-radius: 50%;
  }
`

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;

  .contributors {
    max-width: 400px;
    margin: 100px auto 0;
  }
`

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdown: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
