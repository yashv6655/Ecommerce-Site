import React from "react";
import { ProductConsumer } from "../../context/Context";
import PayPalBtn from "./PayPalBtn";

export default function CartTotals({ history }) {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {(value) => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capitalize mb-4"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
                <h3>Total: ${cartSubTotal}</h3>
                <h3 style={{ marginTop: "2.5rem" }}>Tax: ${cartTax}</h3>
                <h3 style={{ marginTop: "2.5rem" }}>After Tax: ${cartTotal}</h3>
                <PayPalBtn
                  history={history}
                  cartTotal={cartTotal}
                  clearCart={clearCart}
                />
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
