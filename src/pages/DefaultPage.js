import React from 'react';
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpeg";
import {Link} from "react-router-dom";

export default function DefaultPage() {
    return (
        <>
            <Hero img={defaultBcg} title="404 Error" max="true">
                <h2>Page Does Not Exist</h2>
                <Link to="/" className="main-link" style={{marginTop: "2rem"}}>Return Home</Link>
            </Hero>
        </>
    )
}
