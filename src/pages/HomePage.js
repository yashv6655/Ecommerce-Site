import React from 'react';
import {ProductConsumer} from "../context";
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import Services from "../components/HomePageComponents/Services";
import Featured from "../components/HomePageComponents/Featured";

export default function HomePage() {
    return (
        <>
            <Hero title="Products" max="true" style={{margin: "2rem"}}>
                <Link className="main-link"to="/products">Products</Link>
            </Hero>
            <Services></Services>
            <Featured></Featured>
        </>
    )
}
