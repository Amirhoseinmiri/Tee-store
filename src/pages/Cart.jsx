import React from "react";

const Cart = ({ _cartItems }) => {
  return (
    <div className="cart-cont">
      <div className="cart-wrapper">
        {_cartItems.cartItems.length > 0 &&
          _cartItems.cartItems.map((item) => (
            <div className="cart-list-cont" key={item.id}>
              <img src={item.img} alt={item.productName} />
              <div id="cart-text">
                <button className="free-shipping">Free Shipping</button>
                <h2 className="cart-item-h2">{item.productName}</h2>
                <h3 className="cart-item-h3">{item.price.toFixed(2)}</h3>
                <h1 className="cart-item-h3">{item.price * 1.2}</h1>
                <h4 className="cart-item-h4">
                  {item.description.length >
                    200`${item.description.substring(0, 200)}`}
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
