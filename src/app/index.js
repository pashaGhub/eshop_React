import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Products, Cart, Favorites, PageNotFound } from "./pages";
import { Layout } from "./components";

class App extends React.Component {
  state = {
    products: [],
    favorites: [],
    cart: [],
    isLoading: false,
    error: null
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch(
      "https://boiling-reaches-93648.herokuapp.com/food-shop/products"
    );

    if (response.ok) {
      const json = await response.json();
      this.setState({ products: json, isLoading: false });
    } else {
      this.setState({ error: "Oops, something went wrong", isLoading: false });
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

  // addToCart = addId => {

  // }

  render() {
    const { products, favorites, cart, isLoading, error } = this.state;

    return (
      <Router>
        <Layout>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Products
                  toggleFavorite={this.toggleFavorite}
                  products={products}
                  favorites={favorites}
                  cart={cart}
                  isLoading={isLoading}
                  error={error}
                />
              )}
            />
            <Route path="/cart" exact component={Cart} />
            <Route
              path="/favorites"
              exact
              render={() => (
                <Favorites
                  toggleFavorite={this.toggleFavorite}
                  favorites={favorites}
                  products={products}
                />
              )}
            />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
