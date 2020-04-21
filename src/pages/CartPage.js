import React from "react";
import CartSection from "../components/CartPageComponents";
import Hero from "../components/Hero";
import cartBcg from "../images/cartimg.jpg";

export default function CartPage() {
  return (
    <>
      <Hero img={cartBcg} />
      <CartSection />
    </>
  );
}
