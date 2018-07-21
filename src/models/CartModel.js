class CartModel {
  constructor(oldCart) {
    this.total_sum = oldCart.total_sum || 0;
    this.total_count = oldCart.total_count || 0;
    this.products = oldCart.products || [];
  }

  /**
   * Добавить в корзину любое колличество элементов
   * @param {*} product
   * @param {*} id
   * @param {*} quantity
   */
  add(product, id, quantity) {
    let stored_product;

    this.products.forEach(product => {
      if (id === product.id) stored_product = product;
    });

    if (!stored_product) {
      stored_product = { id, quantity: 0, sum: 0 };
      this.products.push(stored_product);
    }

    stored_product.quantity += quantity;
    stored_product.sum = product.price * stored_product.quantity;

    this.total_count += quantity;
    this.total_sum += product.price * quantity;
  }

  /**
   * удалить один элемент из корзины
   * @param {*} product
   * @param {*} id
   */
  removeOne(product, id) {
    id = Number(id);

    for (let i = this.products.length - 1; i >= 0; i--) {
      if (this.products[i].id === id) {
        this.products[i].quantity--;
        this.products[i].sum -= product.price;
        this.total_count--;
        this.total_sum -= product.price;

        if (this.products[i].quantity <= 0) {
          this.products.splice(i, 1);
        }
      }
    }
  }
}

module.exports = CartModel;
