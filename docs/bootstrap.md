Доброе утро! Чтобы подключить Bootstrap в проект на React + Vite, можно воспользоваться несколькими способами. Вот два основных:

### 1. Установка Bootstrap через npm/yarn/pnpm

Этот способ позволяет вам использовать Bootstrap как модуль в вашем проекте.

1. **Установите Bootstrap** через npm, yarn или pnpm:

   ```bash
   npm install bootstrap
   # или
   yarn add bootstrap
   # или
   pnpm add bootstrap
   ```

2. **Импортируйте Bootstrap CSS** в ваш проект. Обычно это делается в файле `src/main.jsx` или `src/index.jsx`:

   ```jsx
   import 'bootstrap/dist/css/bootstrap.min.css';
   import 'bootstrap/dist/js/bootstrap.bundle.min.js';
   ```

3. **Используйте Bootstrap компоненты** в вашем проекте. Например:

   ```jsx
   function App() {
     return (
       <div className="container">
         <h1 className="text-center">Hello, Bootstrap!</h1>
         <button className="btn btn-primary">Click me</button>
       </div>
     );
   }

   export default App;
   ```

### 2. Использование CDN

Если вы не хотите устанавливать Bootstrap через npm, можно подключить его через CDN.

1. Добавьте ссылки на Bootstrap CSS и JS в файл `public/index.html`:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>React + Vite + Bootstrap</title>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
   </head>
   <body>
     <div id="root"></div>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
   </body>
   </html>
   ```

2. Теперь вы можете использовать Bootstrap классы и компоненты в вашем проекте.

### 3. Использование React-Bootstrap (опционально)

Если вы хотите использовать React-компоненты для Bootstrap, можно установить `react-bootstrap`:

1. Установите `react-bootstrap`:

   ```bash
   npm install react-bootstrap bootstrap
   # или
   yarn add react-bootstrap bootstrap
   # или
   pnpm add react-bootstrap bootstrap
   ```

2. Импортируйте Bootstrap CSS и используйте компоненты из `react-bootstrap`:

   ```jsx
   import 'bootstrap/dist/css/bootstrap.min.css';
   import { Button, Container } from 'react-bootstrap';

   function App() {
     return (
       <Container>
         <h1 className="text-center">Hello, React-Bootstrap!</h1>
         <Button variant="primary">Click me</Button>
       </Container>
     );
   }

   export default App;
   ```

### Заключение

Выбор способа зависит от ваших предпочтений и требований проекта. Если вам нужен полный контроль над стилями и компонентами, лучше использовать первый способ. Если вы хотите быстро начать работу, можно использовать CDN. А если вы предпочитаете работать с React-компонентами, то `react-bootstrap` будет отличным выбором.

Удачи с вашим проектом! 😊