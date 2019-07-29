import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

import "./index.scss";

function ProductCart({
  name,
  image,
  description,
  price,
  currencySymbol,
  id,
  isFavorite,
  cartCount,
  addToCart,
  removeFromCart,
  toggleFavorite
}) {
  const className = isFavorite
    ? "ProductCard ProductCard__favorite"
    : "ProductCard";

  return (
    <div className={className}>
      <div className="ProductCard--image">
        <img alt={`products: ${name}`} src={image} />
      </div>
      <div className="ProductCard--info">
        <Link to={`/product/${id}`}>
          <h3>{name}</h3>
        </Link>
        <p>{description}</p>
      </div>
      <div className="ProductCard--cta">
        <p>
          <span>Price:</span> <span>{` ${price}${currencySymbol}`}</span>
        </p>
        <div>
          <button type="button" onClick={() => toggleFavorite(id)}>
            <span role="img" aria-label="add to favorites heart illustration">
              ️️{isFavorite ? "❌" : "❤️"}
            </span>
          </button>
          {!!cartCount && (
            <button type="button" onClick={() => removeFromCart(id)}>
              <span role="img" aria-label="remove from cart illustration">
                🗑️
              </span>
            </button>
          )}
          <button type="button" onClick={() => addToCart(id)}>
            <span role="img" aria-label="add to cart illustration">
              ️️🛒
            </span>
            {!!cartCount && (
              <div className="ProductCard--cta-count">{cartCount}</div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
