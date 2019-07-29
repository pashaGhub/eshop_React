import React from "react";
import { ProductCart } from "../../components";

import "./index.scss";

function Favorites({
  favorites,
  cart,
  products = [],
  toggleFavorite,
  addToCart,
  removeFromCart
}) {
  const favoriteProducts = products.filter(product =>
    favorites.includes(product.id)
  );

  return (
    <div className="Favorites">
      {!favoriteProducts && (
        <p>
          Ohhh, no! You don't have favorites{" "}
          <span role="img" aria-label="broken heart emoji">
            💔
          </span>
        </p>
      )}
      {favoriteProducts.map(data => {
        const { count = 0 } = cart.find(({ id }) => id === data.id) || {};

        return (
          <ProductCart
            {...data}
            toggleFavorite={toggleFavorite}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isFavorite
            cartCount={count}
          />
        );
      })}
    </div>
  );
}

export default Favorites;
