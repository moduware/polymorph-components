import React, { Component } from 'react'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 5px;
  padding: 10px;
  align-items: center;

  justify-content: center;
  max-width: 100%;
  background: lightgray;

  > div {
    flex: 1;
    padding: 10px;
  }
  > div p {
    padding: 5px;
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
