import React from "react";
import { Provider } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import {
  Products,
  Cart,
  Favorites,
  PageNotFound,
  SingleProduct
} from "./pages";
import { Layout } from "./components";
import { useFetch } from "./hooks";
import store from "./state";
import { ROUTES } from "../constants";

function onError() {
  return "Ooops! Monkeys stole our products! 😱👟";
}

function onSuccess(payload) {
  store.dispatch({ type: "SET_PRODUCTS", payload });

  return payload;
}

function App() {
  const { loading: isLoading, products, error } = useFetch({
    onError,
    onSuccess,
    src: "https://boiling-reaches-93648.herokuapp.com/food-shop/products",
    initialState: [],
    dataKey: "products"
  });

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route
              path={ROUTES.defaultPage}
              exact
              render={() => <Products isLoading={isLoading} error={error} />}
            />
            <Route path={ROUTES.cart} exact component={Cart} />
            <Route path={ROUTES.favorites} exact component={Favorites} />
            <Route
              path={ROUTES.product}
              render={props => {
                const { id } = props.match.params;
                const product = products.find(product => product.id === id);
                console.log("render", product, id);

                return (
                  <SingleProduct
                    {...props}
                    product={product}
                    isLoadoning={isLoading}
                  />
                );
              }}
            />
            <Redirect exact from={ROUTES.home} to={ROUTES.defaultPage} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
