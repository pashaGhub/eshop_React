import React from "react";
import { connect } from "react-redux";
import { ProductCart } from "../../components";
import "./index.scss";
import shop from "../../../shop";

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
  const favorites = shop.selectors.getFavoriteProducts(state);

  return {
    favorites
  };
}

export default connect(mapStateToProps)(Favorites);
