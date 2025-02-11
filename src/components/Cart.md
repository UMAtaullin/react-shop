Отлично! Давайте улучшим ваш код для добавления товара в корзину (`addToBasket`). Мы сделаем его более простым и понятным, а также исправим небольшие ошибки, которые могут возникнуть при передаче данных.

---

## 1. **Исправление компонента `GoodsItems`**

В текущем коде вы передаете только `id`, `name` и `price` в функцию `addToBasket`, но в `addToBasket` вы ожидаете весь объект товара. Давайте исправим это.

### Обновленный код `GoodsItems`:

```javascript
import React from 'react';

export const GoodsItems = ({ id, name, description, price, image, addToBasket, item }) => {
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
  );
};
```

### Что изменилось:
- Теперь мы передаем весь объект товара (`item`) в функцию `addToBasket`.

---

## 2. **Исправление компонента `GoodsList`**

В `GoodsList` нужно передать весь объект товара в компонент `GoodsItems`.

### Обновленный код `GoodsList`:

```javascript
import React from 'react';
import { GoodsItems } from './GoodsItems';

export const GoodsList = ({ goods, addToBasket }) => {
  if (!goods || goods.length === 0) return <div>Список товаров пуст</div>;

  return (
    <div className='flex flex-wrap gap-2 mt-2 z-10'>
      {goods.map((el) => {
        const backgroundImage = el.displayAssets.find(
          (el) => el.full_background
        );

        return (
          <GoodsItems
            key={el.offerId} // Добавляем ключ для React
            id={el.offerId}
            name={el.displayName}
            description={el.displayDescription}
            price={el.price.regularPrice}
            image={backgroundImage ? backgroundImage.full_background : null}
            addToBasket={addToBasket}
            item={el} // Передаем весь объект товара
          />
        );
      })}
    </div>
  );
};
```

### Что изменилось:
- Добавлен пропс `item`, который передает весь объект товара в `GoodsItems`.

---

## 3. **Упрощение функции `addToBasket`**

Ваша текущая реализация `addToBasket` уже хороша, но давайте сделаем её ещё проще и понятнее.

### Обновленный код `addToBasket`:

```javascript
const addToBasket = (item) => {
  // Проверяем, есть ли товар в корзине
  const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

  if (itemIndex < 0) {
    // Если товара нет в корзине, добавляем его с количеством 1
    setOrder([...order, { ...item, quantity: 1 }]);
  } else {
    // Если товар уже есть в корзине, увеличиваем его количество
    const newOrder = order.map((orderItem, index) =>
      index === itemIndex
        ? { ...orderItem, quantity: orderItem.quantity + 1 }
        : orderItem
    );
    setOrder(newOrder);
  }
};
```

### Что изменилось:
- Упрощена логика обновления количества товара.
- Используется `map` для обновления массива `order`.

---

## 4. **Полный код компонента `Shop`**

Вот итоговый код компонента `Shop`:

```javascript
import React, { useEffect, useState } from 'react';
import { GoodsList } from './GoodsList';
import { fetchGoods } from '../api/goodsApi';

export const Shop = () => {
  // Состояния компонента
  const [goods, setGoods] = useState([]); // Для хранения списка товаров
  const [isLoading, setIsLoading] = useState(true); // Для отображения загрузки
  const [errorText, setErrorText] = useState(null); // Для отображения ошибки
  const [order, setOrder] = useState([]); // Для хранения заказа

  // Функция для добавления товара в корзину
  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      // Если товара нет в корзине, добавляем его с количеством 1
      setOrder([...order, { ...item, quantity: 1 }]);
    } else {
      // Если товар уже есть в корзине, увеличиваем его количество
      const newOrder = order.map((orderItem, index) =>
        index === itemIndex
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(newOrder);
    }
  };

  // Эффект для выполнения запроса при монтировании компонента
  useEffect(() => {
    const getGoods = async () => {
      try {
        // Вызываем функцию fetchGoods и ждем ответа
        const data = await fetchGoods();
        setGoods(data); // Обновляем состояние с товарами
      } catch (error) {
        // Если произошла ошибка, обновляем состояние с текстом ошибки
        setErrorText('Ошибка загрузки данных');
        console.error('Fetch error:', error);
      } finally {
        // В любом случае убираем состояние загрузки
        setIsLoading(false);
      }
    };

    getGoods(); // Вызываем функцию
  }, []);

  if (isLoading && !errorText) return <p>Loading...</p>;

  return (
    <main className='container contain-content'>
      <GoodsList goods={goods} addToBasket={addToBasket} />
    </main>
  );
};
```

---

## 5. **Что можно улучшить дальше?**

1. **Отображение корзины**:
   - Создайте компонент `Basket`, который будет отображать товары в корзине и их общую стоимость.

2. **Удаление товаров из корзины**:
   - Добавьте функцию `removeFromBasket`, которая будет удалять товар из корзины.

3. **Локальное хранилище**:
   - Сохраняйте корзину в `localStorage`, чтобы данные не терялись при обновлении страницы.

4. **Оптимизация**:
   - Используйте `useCallback` для функции `addToBasket`, чтобы избежать лишних ререндеров.

---

Теперь ваш код стал более простым, понятным и готовым к дальнейшему расширению! Если остались вопросы, задавайте 😊