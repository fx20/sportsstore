import React from "react";

const CartDetailsRows = props => {
  const handleChange = (product, event) => {
    props.updateQuantity(product, event.target.value);
  };
  if (!props.cart || props.cart.length === 0) {
    return (
      <tr>
        <td colSpan="5">Your Cart Is Empty</td>
      </tr>
    );
  } else {
    return (
      <>
        {props.cart.map(item => (
          <tr key={item.product.id}>
            <td>
              <input
                type="number"
                value={item.quantity}
                onChange={ev => handleChange(item.product, ev)}
              />
            </td>
            <td>{item.product.name}</td>
            <td>${item.product.price.toFixed(2)}</td>
            <td>${(item.quantity * item.product.price).toFixed(2)}</td>
            <td>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => props.removeFromCart(item.product)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <th colSpan="3" className="text-right">
            Total:
          </th>
          <th colSpan="2">{props.cartPrice.toFixed(2)}</th>
        </tr>
      </>
    );
  }
};

export default CartDetailsRows;
