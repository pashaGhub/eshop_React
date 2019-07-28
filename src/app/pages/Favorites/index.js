import React from "react";
import { ProductCart } from "../../components";

import "./index.scss";

function Favorites({ favorites, products = [], toggleFavorite }) {
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
        return (
          <ProductCart {...data} toggleFavorite={toggleFavorite} isFavorite />
        );
      })}
    </div>
  );
}

export default Favorites;
