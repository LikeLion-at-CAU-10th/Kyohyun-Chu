import React from 'react'
import styled from 'styled-components'

export const CoinName = (props) => {
  return (
    <>
      <Name>{props.children}</Name>
    </>
  )
}

const Name = styled.div`
  font-size: 20px;
`
