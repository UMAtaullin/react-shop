import React, { useEffect, useState } from 'react'
import { GoodsList } from './GoodsList'
import { fetchGoods } from '../api/goodsApi'

export const Shop = () => {
  // Состояния компонента
  const [goods, setGoods] = useState([]) // Для хранения списка товаров
  const [isLoading, setIsLoading] = useState(true) // Для отображения загрузки
  const [errorText, setErrorText] = useState(null) // Для отображения ошибки
  const [order, setOrder] = useState([])

  /**
   * Добавляет товар в корзину.
   * Если товар уже есть в корзине — увеличивает его количество.
   */
  const addToBasket = (item) => {
    // Проверяем, есть ли товар в корзине
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id)

    if (itemIndex < 0) {
      // Если товара нет в корзине, добавляем его с количеством 1
      setOrder([...order, { ...item, quantity: 1 }])
    } else {
      // Если товар уже есть в корзине, увеличиваем его количество
      const newOrder = order.map((orderItem, index) =>
        index === itemIndex
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      )
      setOrder(newOrder)
    }
  }


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
      <GoodsList goods={goods} addToBasket={addToBasket} />
    </main>
  )
}
