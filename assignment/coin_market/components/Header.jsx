import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <div>
      <Wrap>Choo's Coin Market</Wrap>
    </div>
  )
}

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 6rem;
  font-size: 3rem;
`
