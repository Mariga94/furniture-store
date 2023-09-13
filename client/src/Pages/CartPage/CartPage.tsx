import { useEffect, useState } from "react";
import { SingleCartItem } from "../../Components";
import "./CartPage.css";
import { Product } from "../../types";
import data from "../../data";
const CartPage = () => {
  const [cart, setCart] = useState<Product[] | undefined>(undefined);

  useEffect(() => {
    setCart(data);
  }, []);
  return (
    <div className="cart outer-padding">
      <h2>Shop Cart</h2>
      <div className="cart-container flex-row">
        <table className="cart-left">
          <thead>
            <tr className="flex-row justify-space_between align-center">
              <th>Product Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((product) => (
              <SingleCartItem key={product.id} {...product} />
            ))}
          </tbody>
        </table>
        <section className="cart-right flex-col align-start">
          <h2>Cart Totals</h2>
          <p>Subtotal</p>
          <p>Total</p>
          <button className="primary-button">Proceed to Checkout</button>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
