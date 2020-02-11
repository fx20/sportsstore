import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const CartSummary = props => {
  const getSummary = () => {
    if (props.cartItems > 0) {
      return (
        <span>
          {props.cartItems} item(s), ${props.cartPrice.toFixed(2)}
        </span>
      );
    } else {
      return <span>Your cart : (empty) </span>;
    }
  };

  const getLinkClasses = () => {
    return `btn btn-dark text-white ${props.cartItems === 0 ? "disable" : ""}`;
  };

  return (
    <div className="float-right">
      <small>
        {getSummary()}
        <Link className={getLinkClasses()} to="/shop/cart">
          <i className="fa fa-shopping-cart"/>
        </Link>
      </small>
    </div>
  );
};

export default CartSummary;

CartSummary.propTypes = {
  cartItems: PropTypes.number,
  cartPrice: PropTypes.number
};
