import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutpageimg.jpg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="About"
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="About Our Store" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              ipsa natus similique quaerat dicta atque velit deserunt quia
              temporibus odio.
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              ipsa natus similique quaerat dicta atque velit deserunt quia
              temporibus odio.
            </p>
            <button
              style={{ marginTop: "1rem" }}
              className="main-link"
              type="button"
            >
              Additional Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
