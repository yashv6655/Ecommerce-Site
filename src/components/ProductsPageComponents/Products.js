import React from "react";
import { ProductConsumer } from "../../context/Context";
import styled from "styled-components";
import Title from "../Title";
import Product from "../Product";
import ProductFilter from "./ProductFilter";

export default function Products() {
  return (
    <ProductConsumer>
      {(value) => {
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              <Title center title="Our Products" />
              <ProductFilter />
              {/* Number of Products */}
              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="font-weight-bold">
                    Total Products: {filteredProducts.length}
                  </h6>
                </div>
              </div>
              {/* Products */}
              <div className="row py-5">
                {filteredProducts.length === 0 ? (
                  <div className="col text-center text-title">
                    No Items Found
                  </div>
                ) : (
                  filteredProducts.map((product) => {
                    return <Product key={product.id} product={product} />;
                  })
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
