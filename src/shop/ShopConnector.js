import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {loadData} from "../data/ActionCreators";
import {DataTypes} from "../data/Types";
import Shop from "./Shop";
import {addToCart, clearCart, removeFromCart, updateCartQuantity} from "../data/CartActionCreators";
import PropTypes from "prop-types";
import CartDetails from "./CartDetails";
import {DataGetter} from "../data/DataGetter";

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

class ShopConnector extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          from="/shop/products/:category"
          to="/shop/products/:category/1"
          exact={true}
        />
        <Route
          path={"/shop/products/:category/:page"}
          render={routeProps => (
            <DataGetter {...this.props} {...routeProps}>
              <Shop {...this.props} {...routeProps} />
            </DataGetter>
          )}
        />
        <Route
          path="/shop/cart"
          render={routeProps => <CartDetails {...this.props} {...routeProps} />}
        />
        <Redirect to="/shop/products/all/1"/>
      </Switch>
    );
  }

  componentDidMount() {
    this.props.loadData(DataTypes.CATEGORIES);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopConnector);

ShopConnector.propTypes = {
  products: PropTypes.array,
  LoadData: PropTypes.func
};
