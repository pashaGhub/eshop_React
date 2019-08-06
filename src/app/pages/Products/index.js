import React from "react";
import { connect } from "react-redux";
import { Loader, ProductCart } from "../../components";
import "./index.scss";
import shop from "../../../shop";

function Products({ products, isLoading, error }) {
  return (
    <div className="Products">
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {products.map(data => {
        return <ProductCart {...data} key={data.id} />;
      })}
    </div>
  );
}

const enhance = connect(state => ({
  products: shop.selectors.getProducts(state),
  error: shop.selectors.getProductsError(state),
  isLoading: shop.selectors.isLoadingProducts(state)
}));

export default enhance(Products);
