import React, { useState } from 'react'

export const Cart = ({ quantity, order }) => {
  const [isOpen, setIsOpen] = useState(false) // Состояние для открытия/закрытия корзины

  // Функция для расчета общей стоимости
  const calculateTotal = () => {
    return order.reduce(
      (total, item) => total + item.price.regularPrice * item.quantity,
      0
    )
  }

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)} // Открываем/закрываем корзину
        className='
          cart
          w-auto
          p-2
          bg-blue-400
          text-amber-200
          cursor-pointer
          flex items-center
          rounded-lg
          hover:bg-blue-500
        '
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          fill='currentColor'
          className='bi bi-cart3'
          viewBox='0 0 16 16'
        >
          <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2' />
        </svg>
        {quantity > 0 && (
          <span className='ml-2 text-sm bg-red-500 text-white rounded-full px-2 py-1'>
            {quantity}
          </span>
        )}
      </button>

      {/* Отображение содержимого корзины */}
      {isOpen && (
        <div
          className='
          fixed
          right-0
          mt-2
          w-auto
          bg-white
          border
          border-gray-200
          rounded-lg
          shadow-lg
          p-4
          z-50
          insert-0
          flex items-center justify-center 
        '
        >
          <h3 className='text-lg font-bold mb-4 pr-2'>Корзина</h3>
          {order.length === 0 ? (
            <p className='text-gray-500'>Корзина пуста</p>
          ) : (
            <div>
              {order.map((item) => (
                <div key={item.id} className='mb-3'>
                  <div className='flex justify-between items-center'>
                    <span className='font-medium pr-2'>{item.displayName}</span>
                    <span className='text-sm text-gray-600'>
                      {item.quantity} x {item.price.regularPrice} ₽
                    </span>
                  </div>
                </div>
              ))}
              <div className='border-t pt-3 mt-3'>
                <div className='flex justify-between font-bold'>
                  <span>Итого:</span>
                  <span>{calculateTotal()} ₽</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
