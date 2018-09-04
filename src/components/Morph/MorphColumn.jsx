import React, { Component } from 'react'
import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 5px;
  padding: 10px;
  align-items: flex-start;
  // background-color: ${props => props.isSingle ? 'yellow' : 'black'};

  justify-content: center;
  max-width: 100%;
  background: #eff0f4;

  > div {
    display: flex;
    flex: 1;
    padding: 5px;
    min-width: 300px;
    overflow: hidden;
  }
  
  > div span {
    padding: 5px;
    flex: 1;
  }

  > div.single span.image-container {
    display: flex;
    overflow: hidden;
    justify-content: center;
  }
  
  > div p {
    padding: 5px;
    flex: 1;
  }

  @media screen and (max-width: 900px) {
    display: block;
    span img {
      width: 100%;
    }
    div.single span img {
      width: 100%;
      height: 100%;
    }
  }
`;

class MorphColumn extends Component {
  render() {
    const { children } = this.props
    return (
      <FlexContainer>{children}</FlexContainer>
    )
  }
}

export default MorphColumn
