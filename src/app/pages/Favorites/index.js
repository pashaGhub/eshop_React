import React, { useContext } from "react";
import { ProductCart, ShopContext } from "../../components";

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

function Favorites() {
  const { products, favorites } = useContext(ShopContext);
  const favoriteProducts = products.filter(product =>
    favorites.includes(product.id)
  );

  return (
    <div className="Favorites">
      {!favoriteProducts.length && <Error />}
      {favoriteProducts.map(data => (
        <ProductCart {...data} key={data.id} />
      ))}
    </div>
  );
}

export default Favorites;
