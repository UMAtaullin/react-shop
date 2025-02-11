import React from 'react'

export const GoodsItems = ({
  name,
  description,
  image,
  addToBasket,
  item,
}) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={image} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>{description}</p>
        <button
          onClick={() => addToBasket(item)} // Передаем весь объект товара
          className='btn btn-primary'
        >
          Купить
        </button>
      </div>
    </div>
  )
}
