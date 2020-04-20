import React from 'react';
import Info from "../components/AboutPageComponents/Info";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";

export default function AboutPage() {
    return (
        <>
            <Hero img={aboutBcg} />
            <Info />
        </>
    )
}
