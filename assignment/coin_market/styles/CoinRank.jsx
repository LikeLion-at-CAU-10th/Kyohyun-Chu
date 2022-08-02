import React from 'react'
import styled from 'styled-components'

export const CoinRank = (props) => {
  return (
    <>
      <Rank>{props.children}</Rank>
    </>
  )
}

const Rank = styled.div`
  font-size: 24px;
`
