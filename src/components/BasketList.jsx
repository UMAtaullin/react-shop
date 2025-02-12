import React from 'react'
import { BasketItem } from './BasketItem'

export const BasketList = ({key, order = [], setBasketShow }) => {
  // Функция для расчета общей суммы заказа
  const calculateTotal = () => {
    return order.reduce(
      (total, item) => total + item.price.regularPrice * item.quantity,
      0
    )
  }

  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 z-50 d-flex justify-content-center align-items-center'>
      <div className='bg-white rounded-lg p-4 w-50'>
        <h3 className='list-group-item active'>Корзина</h3>
        <ul className='list-group'>
          {order.length ? (
            order.map((el) => (
              <BasketItem
                key={key}
                name={el.displayName}
                price={el.price.regularPrice}
                quantity={el.quantity}
              />
            ))
          ) : (
            <li className='list-group-item'>Корзина пуста</li>
          )}
        </ul>
        <div className='list-group-item active d-flex justify-content-between align-items-center'>
          <span>Итого:</span>
          <span>{calculateTotal()} ₽</span>
        </div>
        <button
          className='btn btn-secondary mt-3'
          onClick={() => setBasketShow(false)}
        >
          Закрыть
        </button>
      </div>
    </div>
  )
}
