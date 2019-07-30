import React from "react";
import { ProductCart } from "../../components";

import "./index.scss";

function Error() {
  return (
    <p>
      Ohhh, no! You don't have favorites{" "}
      <span role="img" aria-label="broken heart emoji">
        💔
      </span>
    </p>
  );
}

function Favorites({ favorites, cart, products, ...restProps }) {
  const favoriteProducts = products.filter(product =>
    favorites.includes(product.id)
  );

  return (
    <div className="Favorites">
      {!favoriteProducts.length && <Error />}
      {favoriteProducts.map(data => {
        const { count = 0 } = cart.find(({ id }) => id === data.id) || {};

        return (
          <ProductCart
            {...restProps}
            {...data}
            key={data.id}
            isFavorite
            cartCount={count}
          />
        );
      })}
    </div>
  );
}

export default Favorites;
