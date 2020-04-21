import React from "react";
import Info from "../components/AboutPageComponents/Info";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutpageimg.jpg";

export default function AboutPage() {
  return (
    <>
      <Hero img={aboutBcg} />
      <Info />
    </>
  );
}
