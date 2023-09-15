// Order Model

class Order {
  constructor(order_id, customer_id, order_date, status) {
    this.order_id = order_id;
    this.customer_id = customer_id;
    this.order_date = order_date;
    this.status = status;
  }
}

export default Order;
