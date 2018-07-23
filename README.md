# Тестовое задание по позицию Node.js разработчика

> Задание: https://goo.gl/RBYb6a

## Быстрый старт

```bash
# Установить зависимости
npm install

# Запустить приложение
npm run start
```

## Endpoints

### Получить список продуктов

```bash
GET api/products
```

### Добавить продукт в базу данных

```bash
POST api/products

# Образец запроса
# {
#   "id": 43,
#   "name": "Название продукта",
#   "description": "Описание продукта",
#   "price": 123
# }
```

### Получить информацию о корзине

```bash
GET api/cart
```

### Удалить продукт из корзины

```bash
DELETE api/cart/{id}
```

### Добавить продукты в корзину

```bash
POST api/cart

# Образец запроса
# {
#   "product_id": 123,
#   "quantity": 123,
# }
```

### Получить информацию о приложении

```bash
GET api/info
```

## App Info

### Author

Nikolay Kachanov

### Version

1.0.0
