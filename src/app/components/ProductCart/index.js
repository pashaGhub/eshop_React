import React from "react";
// import { Link } from "react-router-dom";

import "./index.scss";

function ProductCart({
  name,
  image,
  description,
  price,
  currencySymbol,
  id,
  isFavorite,
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
        <h3>{name}</h3>
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
          <button
            type="button"
            onClick={() => console.log("Add to Cart", name)}
          >
            <span role="img" aria-label="add to cart illustration">
              ️️🛒
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
