import React from 'react'
import { Cart } from './Cart'

export const Header = ({ quantity, order }) => {
  return (
    <nav className='navbar bg-blue-100 sticky top-0 shadow-md'>
      <div className='container-fluid flex justify-between items-center'>
        <a className='navbar-brand text-xl font-bold'>Магазин</a>
        <div className='flex items-center gap-4'>
          <Cart quantity={quantity} order={order} />
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2 p-2 rounded-lg border border-gray-300'
              type='search'
              placeholder='Поиск'
              aria-label='Search'
            />
            <button
              className='btn btn-outline-success bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600'
              type='submit'
            >
              Поиск
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
