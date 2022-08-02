import { useRouter } from 'next/router'
import { CoinName } from '../../styles/CoinName'
import styled from 'styled-components'

export default () => {
  const router = useRouter()

  return (
    <div>
      <Wraps>
        <h1> {router.query.name}'s Detail Information </h1>
        <CoinName> coin name: {router.query.name} </CoinName>
      </Wraps>
    </div>
  )
}

const Wraps = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 6rem;
`
