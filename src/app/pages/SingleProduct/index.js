import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./index.scss";
import { ROUTES } from "../../../constants";
import { Loader } from "../../components";
import { usePrevious } from "../../hooks";
import shop from "../../../shop";

function SingleProduct({ history, product = [], isLoading, error }) {
  const prevLoading = usePrevious(isLoading);
  useEffect(() => {
    if (prevLoading && !isLoading && (error || !Object.keys(product).length)) {
      history.replace(ROUTES.defaultPage);
    }
  }, [error, history, isLoading, prevLoading, product]);

  if (isLoading) {
    return <Loader />;
  }

  const { name, image, description, price, currencySymbol } = product;
  const onClick = () => history.push(ROUTES.cart);

  return (
    <div className="SingleProduct">
      <img src={image} alt={`product: ${name}`} />
      <p>
        {name} - {price}
        {currencySymbol}
      </p>
      <p>{description}</p>
      <button type="button" onClick={onClick}>
        Go to Cart
      </button>
    </div>
  );
}

const enhance = connect((state, { match: { params } }) => ({
  product: shop.selectors.getProductById(state, params.id) || {},
  error: shop.selectors.getProductsError(state),
  isLoading: shop.selectors.isLoadingProducts(state)
}));

export default enhance(SingleProduct);
