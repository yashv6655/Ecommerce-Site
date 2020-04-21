import React from "react";
import Hero from "../components/Hero";
import Products from "../components/ProductsPageComponents/Products";
import productsBcg from "../images/productsimg.webp";

export default function ProductsPage() {
  return (
    <>
      <Hero img={productsBcg} />
      <Products />
    </>
  );
}
