import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaInfo, FaOpencart, FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../context/Context";

export default function Product({ product }) {
  return (
    <ProductConsumer>
      {(value) => {
        const { addToCart, setSingleProduct } = value;
        return (
          <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
            <div className="card">
              <div className="img-container">
                <img
                  src={product.image}
                  className="card-img-top p-5"
                  alt="Product"
                  style={{ height: "350px" }}
                />
                <div className="product-icons">
                  <Link
                    to={`/products/${product.id}`}
                    onClick={() => setSingleProduct(product.id)}
                  >
                    <FaInfo className="icon" />
                  </Link>
                  <FaCartPlus
                    className="icon"
                    onClick={() => addToCart(product.id)}
                  />
                </div>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="mb-0">{product.title}</p>
                <p className="mb-0 text-main">${product.price}</p>
              </div>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const ProductWrapper = styled.div`
  .card {
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.2);
    transition: var(--mainTransition);
    height: 100%;
  }
  .card:hover {
    box-shadow: 13px 10px 5px 0px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .card-imp-top {
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top {
    transform: scale(1.05);
    opacity: 0.5;
  }
  .img-container {
    position: relative;
  }
  .product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  .icon {
    font-size: 2.25rem;
    margin: 1rem;
    padding: 0.5rem;
    color: var(--mainWhite);
    background: var(--mainCyane);
    border-radius: 0.3rem;
  }
  .card:hover .product-icons {
    opacity: 1;
  }
  .card-body {
    font-weight: bold;
    letter-spacing: 1.25px;
    text-transform: capitalize;
  }
  .text-main {
    color: var(--darkPeach);
  }
`;
