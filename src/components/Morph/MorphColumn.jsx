import React, { Component } from 'react'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 5px;
  padding: 10px;
  align-items: flex-start;

  justify-content: center;
  max-width: 100%;
  background: #eff0f4;

  > div {
    display: flex;
    flex: 1;
    padding: 10px;
    min-width: 300px;
    overflow: hidden;
  }
  > div p {
    padding: 10px;
    flex: 1;
  }

  @media screen and (max-width: 900px) {
    display: block;
    p img {
      width: 100%;
    }
  }
`

class MorphColumn extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="morph-column">
        <FlexContainer>{children}</FlexContainer>
      </div>
    )
  }
}

export default MorphColumn
