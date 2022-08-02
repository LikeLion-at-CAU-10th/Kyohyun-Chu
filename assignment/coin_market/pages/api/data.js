import axios from 'axios'
import { useState, useEffect } from 'react'

export const useGetList = async () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://f8486a5c-579f-4369-8f5c-332563cf73fe.mock.pstmn.io/list',
        )

        setData(res)
        setLoading(true)
      } catch (err) {
        console.log(err)
      }

      setLoading(false)
    }
    fetchData()
  }, [])

  return [loading, data]
}
