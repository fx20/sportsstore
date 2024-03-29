import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import Shop from "./Shop";
import {
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart
} from "../data/CartActionCreators";
import PropTypes from "prop-types";
import CartDetails from "./CartDetails";

const mapStateToProps = dataStore => ({
  ...dataStore
});

const mapDispatchToProps = {
  loadData,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart
};

const filterProducts = (products = [], category) =>
  !category || category === "All"
    ? products
    : products.filter(p => p.category.toLowerCase() === category.toLowerCase());

class ShopConnector extends Component {
  render() {
    console.log(this.props);
    return (
      <Switch>
        <Route
          path="/shop/products/:category?"
          render={routeProps => (
            <Shop
              {...this.props}
              {...routeProps}
              products={filterProducts(
                this.props.products,
                routeProps.match.params.category
              )}
            />
          )}
        />
        <Route
          path="/shop/cart"
          render={routeProps => <CartDetails {...this.props} {...routeProps} />}
        />
        <Redirect to="/shop/products" />
      </Switch>
    );
  }
  componentDidMount() {
    this.props.loadData(DataTypes.CATEGORIES);
    this.props.loadData(DataTypes.PRODUCTS);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopConnector);

ShopConnector.propTypes = {
  products: PropTypes.array,
  loadData: PropTypes.func
};
