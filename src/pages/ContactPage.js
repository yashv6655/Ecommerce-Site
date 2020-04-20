import React from 'react';
import Hero from "../components/Hero";
import contactImg from "../images/contactBcg.jpeg";
import Contact from "../components/ContactPageComponents/Contact";

export default function ContactPage() {
    return (
        <>
            <Hero img={contactImg} />
            <Contact></Contact>
        </>
    )
}
