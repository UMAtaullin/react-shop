import React from 'react'
import { GoodsItems } from './GoodsItems'

export const GoodsList = ({ goods }) => {
  if (!goods || goods.length === 0) return <div>Список товаров пуст</div>

  return (
    <div className='flex flex-wrap gap-2 mt-2'>
      {goods.map((el) => {
        const backgroundImage = el.displayAssets.find(
          (el) => el.full_background
        )

        return (
          <GoodsItems
            key={el.offerId}
            title={el.displayName}
            description={el.displayDescription}
            price={el.price.regularPrice}
            image={backgroundImage ? backgroundImage.full_background : null} 
          />
        )
      })}
    </div>
  )
}
