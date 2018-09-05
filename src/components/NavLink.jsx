import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

class navLink extends Component {
  render() {
    const { children } = this.props
    return (
      <Link style={{ border: 'none' }} to={this.props.to}>
        <LinkContainer>{children}</LinkContainer>
      </Link>
    )
  }
}

export default navLink

const LinkContainer = styled.div`
  border-radius: 3px;
  padding: 10px;
  font-size: 3rem;
  font-weight: 600;
  display: inline-block;
  transition: all 0.3s ease;
  color: black;

  &:hover {
    color: ${props => props.theme.brand};
  }
`
