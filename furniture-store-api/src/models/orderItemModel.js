// Order Item Model

class OrderItem {
  constructor(order_item_id, order_id, product_id, quantity, subtotal) {
    this.order_item_id = order_item_id;
    this.order_id = order_id;
    this.product_id = product_id;
    this.quantity = quantity;
    this.subtotal = subtotal;
  }
}
