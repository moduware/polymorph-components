import React, { Component } from 'react'
import { FaGithubAlt, FaTwitter } from 'react-icons/lib/fa'
import { MdMessage, MdEmail } from 'react-icons/lib/md'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`

export const UserIcon = styled.a`
  margin-left: 25px;
  color: white;
  &:hover {
    color: rgba(0, 0, 0, 0.2);
    border-bottom: none;
  }
`

const iconStyle = {
  width: '20px',
  height: '20px'
}

class UserLinks extends Component {
  render() {
    return (
      <Container className="user-links">
        <UserIcon href="https://github.com/moduware">
          <FaGithubAlt style={iconStyle} />
        </UserIcon>
        <UserIcon href="https://twitter.com/moduwareinc?lang=en">
          <FaTwitter style={iconStyle} />
        </UserIcon>
        <UserIcon href="https://www.messenger.com/t/moduwareinc">
          <MdMessage style={iconStyle} />
        </UserIcon>
        <UserIcon href="mailto:info@moduware.com">
          <MdEmail style={iconStyle} />
        </UserIcon>
      </Container>
    )
  }
}

export default UserLinks
