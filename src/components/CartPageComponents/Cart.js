import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Cart" center />
      </div>
      {/* Cart Columns */}
      <CartColumns></CartColumns>
      {/* Car List */}
      <CartList></CartList>
      {/* Cart Totals */}
      <CartTotals></CartTotals>
    </section>
  );
}
