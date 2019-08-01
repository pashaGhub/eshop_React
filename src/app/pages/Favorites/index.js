import React from "react";
import { connect } from "react-redux";
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

function Favorites({ favorites, ...restProps }) {
  return (
    <div className="Favorites">
      {!favorites.length && <Error />}
      {favorites.map(data => {
        return <ProductCart {...restProps} {...data} key={data.id} />;
      })}
    </div>
  );
}

function mapStateToProps(state) {
  const { products, favorites } = state.shop;
  const favoriteProducts = products.filter(product =>
    favorites.includes(product.id)
  );

  return {
    favorites: favoriteProducts
  };
}

export default connect(mapStateToProps)(Favorites);
