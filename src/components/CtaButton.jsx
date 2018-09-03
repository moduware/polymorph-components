import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

class ctaButton extends Component {
  render() {
    const { children } = this.props
    return (
      <Link style={{ border: 'none' }} to={this.props.to}>
        <ButtonContainer>{children}</ButtonContainer>
      </Link>
    )
  }
}

export default ctaButton

const ButtonContainer = styled.div`
  border: 1px solid ${props => props.theme.brand};
  border-radius: 3px;
  padding: 20px;
  font-size: 3rem;
  display: inline-block;
  transition: all 0.3s ease;
  color: ${props => props.theme.brand};

  &:hover {
    color: white;
    background: ${props => props.theme.brand};
  }
`
