import React from "react";
import CategoryNavigation from "./CategoryNavigation";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";
import PropTypes from "prop-types";

const Shop = props => {
  const handleAddToCart = (...arg) => {
    props.addToCart(...arg);
    props.history.push("/shop/cart");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col bg-dark text-white">
          <div className="navbar-brand">SPORT STORE</div>
          <CartSummary {...props} />
        </div>
      </div>
      <div className="row">
        <div className="col-2 p-2">
          <CategoryNavigation
            baseUrl="/shop/products"
            categories={props.categories}
          />
        </div>
        <div className="col-10 p-2">
          <ProductList products={props.products} addToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;

Shop.propTypes = {
  categories: PropTypes.array,
  products: PropTypes.array,
  addToCart: PropTypes.func,
  history: PropTypes.string
};
