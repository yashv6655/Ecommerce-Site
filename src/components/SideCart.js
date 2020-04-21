import React from "react";
import { ProductConsumer } from "../context/Context";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SideCart() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartOpen, closeCart, cart, cartTotal } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              {cart.map((item) => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    {/* <img
                      height="60"
                      width="60"
                      src={`../${item.image}`}
                      alt="Snip"
                    /> */}
                    <img width="50" src={item.image} alt="Item" />
                    <div className="mt-3">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-capitalize">
                        Amount: {item.count}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4
              className="text-capitalize text-main"
              style={{ color: "black" }}
            >
              Cart Total: ${cartTotal}
            </h4>
            <div className="text-center my-5">
              <Link to="/cart" className="main-link">
                Cart
              </Link>
              <p
                style={{ marginTop: "2rem", color: "var(--mainBlack)" }}
                className="text-title"
              >
                Click Anywhere To Close
              </p>
            </div>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainPeach);
  z-index: 1;
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  @media (min-width: 570px) {
    width: 20rem;
  }
  overflow: scroll;
  padding: 2.4rem;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
  }
`;
