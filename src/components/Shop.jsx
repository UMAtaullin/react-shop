import React, { useEffect, useState } from 'react'
import { GoodsList } from './GoodsList'
import { fetchGoods } from '../api/goodsApi'

export const Shop = () => {
  // Состояния компонента
  const [goods, setGoods] = useState([]) // Для хранения списка товаров
  const [isLoading, setIsLoading] = useState(true) // Для отображения загрузки
  const [errorText, setErrorText] = useState(null) // Для отображения ошибки

  // Эффект для выполнения запроса при монтировании компонента
  useEffect(() => {
    const getGoods = async () => {
      try {
        // Вызываем функцию fetchGoods и ждем ответа
        const data = await fetchGoods()
        setGoods(data) // Обновляем состояние с товарами
      } catch (error) {
        // Если произошла ошибка, обновляем состояние с текстом ошибки
        setErrorText('Ошибка загрузки данных')
        console.error('Fetch error:', error)
      } finally {
        // В любом случае убираем состояние загрузки
        setIsLoading(false)
      }
    }

    getGoods() // Вызываем функцию
  }, [])

  if (isLoading && !errorText) return <p>Loading...</p>

  return (
    <main className='container contain-content'>
      <GoodsList goods={goods} />
    </main>
  )
}
