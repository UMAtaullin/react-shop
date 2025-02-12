import React from 'react'

export const BasketItem = ({ name, price, quantity }) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <span>
        {name} x {quantity} = {price * quantity} ₽
      </span>
      <button type='button' className='btn-close' aria-label='Close'></button>
    </li>
  )
}
