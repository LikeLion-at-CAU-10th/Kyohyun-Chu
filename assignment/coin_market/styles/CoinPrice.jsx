import React from 'react'
import styled from 'styled-components'

export const CoinPrice = (props) => {
  return (
    <>
      <Price>{props.children}</Price>
    </>
  )
}

const Price = styled.div`
  font-size: 16px;
`
