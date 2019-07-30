import React from "react";
import { Cart } from "../..";

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

export default CartRow;
