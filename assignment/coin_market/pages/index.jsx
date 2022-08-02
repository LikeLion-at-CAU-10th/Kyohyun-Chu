import Head from 'next/head'
import { router } from 'next/router'
import { Header } from '../components/Header'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { CoinRank } from '../styles/CoinRank'
import { CoinName } from '../styles/CoinName'
import { CoinPrice } from '../styles/CoinPrice'
import styled from 'styled-components'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await axios.get(
          'https://f8486a5c-579f-4369-8f5c-332563cf73fe.mock.pstmn.io/list',
        )
        setData(res.data)
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }
    fetchData()
  }, [])
  console.log(data)
  return (
    <>
      <Head>
        <title>Coin Market</title>
      </Head>
      <Header />
      {loading ? (
        <h1>Wait...</h1>
      ) : (
        <Wraps>
          {data?.map((list) => (
            <Wrap key={list.id}>
              <CoinRank>coin rank: {list.id}</CoinRank>
              <CoinName>coin name: {list.name}</CoinName>
              <CoinPrice>price: ${list.price}</CoinPrice>
              <Btn
                type="button"
                onClick={() => router.push(`/details/${list.name}`)}
              >
                Detail Information
              </Btn>
            </Wrap>
          ))}
        </Wraps>
      )}
    </>
  )
}

const Wraps = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 6rem;
`
const Wrap = styled.div`
  text-align: center;
`
const Btn = styled.button`
  :hover {
    background-color: orange;
    color: #fff;
  }
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid;
`
