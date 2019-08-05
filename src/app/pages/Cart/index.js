import React from "react";
import { connect } from "react-redux";
import "./index.scss";
import { Error, CartHeader, Total, CartRow } from "./pageParts";
import shop from "../../../shop";

function Cart({ cart, total }) {
  return (
    <div className="Cart">
      {!cart.length && <Error />}
      {!!cart.length && <CartHeader />}
      {cart.map(item => (
        <CartRow {...item} key={item.id} />
      ))}
      {!!cart.length && <Total total={total} />}
    </div>
  );
}

function mapStateToProps(state) {
  const cart = shop.selectors.getCartProducts(state);
  const total = cart.reduce(
    (result, { price, count }) => result + Number(price) * count,
    0
  );

  return { cart, total };
}

export default connect(mapStateToProps)(Cart);
