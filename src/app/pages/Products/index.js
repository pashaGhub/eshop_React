import React from "react";
import { Loader, ProductCart } from "../../components";
import "./index.scss";

function Products({
  products = [],
  isLoading,
  error,
  favorites,
  cart,
  toggleFavorite
}) {
  return (
    <div className="Products">
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {products.map(data => {
        return (
          <ProductCart
            toggleFavorite={toggleFavorite}
            {...data}
            isFavorite={favorites.includes(data.id)}
          />
        );
      })}
    </div>
  );
}

export default Products;
