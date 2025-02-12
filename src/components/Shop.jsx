import React, { useEffect, useState } from 'react'
import { GoodsList } from './GoodsList'
import { fetchGoods } from '../api/goodsApi'
import { Header } from './Header'
import { BasketList } from './BasketList'

export const Shop = () => {
  // Состояния компонента
  const [goods, setGoods] = useState([]) // Для хранения списка товаров
  const [isLoading, setIsLoading] = useState(true) // Для отображения загрузки
  const [errorText, setErrorText] = useState(null) // Для отображения ошибки
  const [order, setOrder] = useState([])
  const [isBasketShow, setBasketShow] = useState(false)

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

  // Функция для расчета общего количества товаров в корзине
  const calculateTotalQuantity = () => {
    return order.reduce((total, item) => total + item.quantity, 0)
  }

  const handleBasketToShow = () => {
    setBasketShow(!isBasketShow)
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
    <div className='shop'>
      <Header
        quantity={calculateTotalQuantity()}
        order={order}
        handleBasketToShow={handleBasketToShow}
      />
      <main className='container contain-content'>
        <GoodsList goods={goods} addToBasket={addToBasket} />
        {isBasketShow && (
          <div className='fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 z-50'>
            <BasketList 
              key={order.offerId}
              order={order} 
              handleBasketToShow={handleBasketToShow} 
              setBasketShow={setBasketShow}
              />
          </div>
        )}
      </main>
    </div>
  )
}
