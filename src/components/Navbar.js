import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context/Context";
import logo from "../images/SimpleBuys1.png";

export default function Navbar() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartItems, handleSidebar, handleCart } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              {/* <FaBars className="nav-icon" onClick={handleSidebar} /> */}
              <button
                type="button"
                className="btn-info"
                onClick={handleSidebar}
              >
                Menu
              </button>
              <img height="115" width="110" src={logo} alt="Company" />
              <div className="nav-cart">
                {/* <FaCartPlus
                  style={{ background: "var(--primaryColor)" }}
                  className="nav-icon"
                  onClick={handleCart}
                /> */}
                <button type="button" className="btn-info" onClick={handleCart}>
                  Cart
                </button>
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainWhite);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.75rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;
