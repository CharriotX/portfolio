import React from 'react'
import styled from 'styled-components'



export const Navigation = () => {
  return (
    <StyledMenu>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">My work</a>
          </li>
          <li>
            <a href="">Resume</a>
          </li>
        </ul>
      </StyledMenu>
  )
}


const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }

`
