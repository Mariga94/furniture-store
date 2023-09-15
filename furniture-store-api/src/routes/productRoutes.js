// Product Model

class Product {
  constructor(product_id, product_name, description, price, category_id) {
    this.product_id = product_id;
    this.product_name = product_name;
    this.description = description;
    this.price = price;
    this.category_id = category_id;
  }
}

export default Product;
