class MainController {
  info(req, res) {
    res.json({
      requests: [
        {
          endpoint: 'api/products',
          method: 'GET',
          description: 'Получение списка продуктов.',
          parameters: 'none'
        },
        {
          endpoint: 'api/products',
          method: 'POST',
          description: 'Добавление продукта в базу данных',
          parameters: {
            id: 'integer',
            name: 'string',
            description: 'string',
            price: 'integer'
          }
        },
        {
          endpoint: 'api/cart',
          method: 'GET',
          description: 'Получение информации о корзине.',
          parameters: 'none'
        },
        {
          endpoint: 'api/cart',
          method: 'POST',
          description: 'Добавление продукта в корзину.',
          parameters: {
            product_id: 'integer',
            quantity: 'integer'
          }
        },
        {
          endpoint: 'api/cart/:id',
          method: 'DELETE',
          description: 'Удаление продукта из корзины.',
          parameters: 'none'
        }
      ]
    });
  }
}

module.exports = new MainController();
