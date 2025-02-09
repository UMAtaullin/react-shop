import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL } from '../config'
import { GoodsList } from './GoodsList'

export const Shop = () => {
  const [goods, setGoods] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorText, setErrorText] = useState(null)

  const fetchGoods = () => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok')
        return response.json()
      })
      .then((data) => {
        if (data.shop) setGoods(data.shop)
        setIsLoading(false)
      })
      .catch((error) => {
        setErrorText('Ошибка загрузки данных')
        setIsLoading(false) // Обязательно установите isLoading в false
        console.error('Fetch error:', error)
      })
  }

  useEffect(() => {
    fetchGoods()
  }, [])

  if (isLoading && !errorText) return <p>Loading...</p>

  return (
    <main className='container contain-content'>
      <GoodsList goods={goods} />
    </main>
  )
}
