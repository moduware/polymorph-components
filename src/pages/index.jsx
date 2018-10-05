import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import CtaButton from '../components/CtaButton'
import MorphContainer from '../components/MorphContainer'
import Navigation from '../components/Layout/Navigation'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  onHover(event) {
    let element = event.target;
    console.log(element);
    element.setAttribute('src', '/logos/poly-logo-1.png');
  }

  onLeave(event) {
    let element = event.target;
    element.setAttribute('src', '/logos/poly-logo-3.png');
  }

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
              <img src={config.siteLogo} width="150px" alt="moduware logo"
                onMouseOver={(event) => this.onHover(event)}
                onMouseLeave={(event) => this.onLeave(event)}/>
              <h1>{config.siteTitle}</h1>
              <h4>{config.siteDescription}</h4>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            <h2>List of Morph Components</h2>
            <p>
              A collection of morph components with their documentation and usage examples.
            </p>

            <MorphContainer />

            <div className="contributors">
              <p>
                Created by Moduware.{' '}
                <a href="https:twitter.com/moduwareinc">
                  Follow us on Twitter.
                </a>{' '}
                Also, click <a href="https://github.com/moduware">Moduware Github</a> for
                our github profile.
              </p>
            </div>
          </BodyContainer>
        </main>
      </div>
    )
  }

  onHover(event) {
    let element = event.target;
    console.log(element);
    element.setAttribute('src', '/logos/poly-logo-1.png');
  }

  onLeave(event) {
    let element = event.target;
    element.setAttribute('src', '/logos/poly-logo-3.png');
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
  & > img:hover {
    opacity: 0.9;
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
