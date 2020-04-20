import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import singleProductImg from "../images/singleProductBcg.jpeg";
import { ProductConsumer } from "../context/Context";

export default function SingleProductPage() {
  return (
    <>
      <Hero img={singleProductImg} title="Single Product" />
      <ProductConsumer>
        {(value) => {
          const { singleProduct, addToCart, loading } = value;

          if (loading) {
            console.log("Loading");
            return <h1>Loading...</h1>;
          }
          const {
            company,
            description,
            id,
            price,
            title,
            image,
          } = singleProduct;
          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    {/* For contentful, replace src with {image} */}
                    <img src={`../${image}`} alt="Snip" />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">Model: {title}</h5>
                    <h5 className="text-capitalize mb4">Company: {company}</h5>
                    <h5
                      className="text-main text-capitalize mb-4"
                      style={{ color: "var(--mainWhite)" }}
                    >
                      Price: ${price}
                    </h5>
                    <p className="text-capitalize text-title mt-3">
                      Additional Information:
                    </p>
                    <p
                      className="text-main"
                      style={{ color: "var(--mainWhite)" }}
                    >
                      {description}
                    </p>
                    <button
                      type="button"
                      className="main-link"
                      stlye={{ margin: "0.7rem", marginLeft: "3rem" }}
                      onClick={() => {
                        addToCart(id);
                      }}
                    >
                      Add To Cart
                    </button>
                    <Link
                      to="/products"
                      className="main-link"
                      style={{
                        marginTop: "2rem",
                        marginLeft: "3rem",
                        padding: "0.5rem",
                      }}
                    >
                      Back To Products
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
}
