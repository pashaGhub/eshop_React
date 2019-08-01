import React from "react";
import { connect } from "react-redux";
import { Loader, ProductCart } from "../../components";
import "./index.scss";

function Products({ products = [], isLoading, error }) {
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

function mapStateToPropos(state) {
  const { products } = state.shop;

  return { products };
}

export default connect(mapStateToPropos)(Products);
