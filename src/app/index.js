import React from "react";
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
import { ROUTES } from "../constants";

class App extends React.Component {
  state = {
    products: [],
    favorites: [],
    cart: [],
    isLoading: true,
    error: null
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch(
      "https://boiling-reaches-93648.herokuapp.com/food-shop/products"
    );

    if (response.ok) {
      const json = await response.json();
      this.setState({
        products: json,
        isLoading: false
      });
    } else {
      this.setState({
        error: "Ooops! Monkeys stole our products! 😱👟",
        isLoading: false
      });
    }
  }

  toggleFavorite = id => {
    const { favorites } = this.state;

    if (favorites.includes(id)) {
      this.setState({
        favorites: favorites.filter(favoriteId => favoriteId !== id)
      });
    } else {
      this.setState({ favorites: [...favorites, id] });
    }
  };

  addToCart = addId => {
    this.setState(state => {
      const itemIndex = state.cart.findIndex(({ id }) => id === addId);
      if (itemIndex > -1) {
        return {
          cart: state.cart.map((cartItem, i) =>
            i === itemIndex
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        };
      }

      return { cart: [...state.cart, { id: addId, count: 1 }] };
    });
  };

  removeFromCart = removeId => {
    this.setState(state => {
      return { cart: state.cart.filter(({ id }) => id != removeId) };
    });
  };

  render() {
    const { products, favorites, cart, isLoading, error } = this.state;

    return (
      <Router>
        <Layout>
          <Switch>
            <Route
              path={ROUTES.defaultPage}
              exact
              render={() => (
                <Products
                  toggleFavorite={this.toggleFavorite}
                  addToCart={this.addToCart}
                  removeFromCart={this.removeFromCart}
                  products={products}
                  favorites={favorites}
                  cart={cart}
                  isLoading={isLoading}
                  error={error}
                />
              )}
            />
            <Route
              path={ROUTES.cart}
              exact
              render={() => <Cart cart={cart} products={products} />}
            />
            <Route
              path={ROUTES.favorites}
              exact
              render={() => (
                <Favorites
                  toggleFavorite={this.toggleFavorite}
                  addToCart={this.addToCart}
                  removeFromCart={this.removeFromCart}
                  favorites={favorites}
                  cart={cart}
                  products={products}
                />
              )}
            />
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
    );
  }
}

export default App;
