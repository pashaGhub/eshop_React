import React from "react";
import "./index.scss";

function Error() {
  return (
    <p>
      Ohhh, no! You don't have anything in your cart{" "}
      <span role="img" aria-label="broken heart emoji">
        💔
      </span>
    </p>
  );
}

function CartHeader() {
  return (
    <div className="Cart--header">
      <label>Product:</label>
      <label>Price:</label>
    </div>
  );
}

function Total({ total }) {
  return (
    <div className="Cart--total">
      <label>Total:</label> {total}
    </div>
  );
}

function CartRow({ id, name, price, currencySymbol, count }) {
  return (
    <div key={id} className="Cart--item">
      <spam>
        {name} x {count}
      </spam>
      <span>
        {price * count}
        {currencySymbol}
      </span>
    </div>
  );
}

function Cart({ products, cart }) {
  const cartItems = cart.map(item => {
    const product = products.find(({ id }) => id === item.id);

    return { ...product, ...item };
  });
  const total = cartItems.reduce(
    (result, { price, count }) => result + Number(price) * count,
    0
  );

  return (
    <div className="Cart">
      {!cart.length && <Error />}
      {!!cartItems.length && <CartHeader />}
      {cartItems.map(item => (
        <CartRow {...item} key={item.id} />
      ))}
      {!!cartItems.length && <Total total={total} />}
    </div>
  );
}

export default Cart;
