import React from "react";
import { Loader, ProductCart } from "../../components";
import "./index.scss";

function Products({
  products = [],
  isLoading,
  error,
  favorites,
  cart,
  toggleFavorite,
  addToCart,
  removeFromCart
}) {
  return (
    <div className="Products">
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {products.map(data => {
        const { count = 0 } = cart.find(({ id }) => id === data.id) || {};

        return (
          <ProductCart
            toggleFavorite={toggleFavorite}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            {...data}
            isFavorite={favorites.includes(data.id)}
            cartCount={count}
          />
        );
      })}
    </div>
  );
}

export default Products;
