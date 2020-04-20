import React, { Component } from 'react';
import styled from "styled-components";
import {FaShippingFast, FaRedo, FaMoneyBill} from "react-icons/fa";

export default class Services extends Component {
    state = {
        services: [
            {
                id: 1,
                icon: <FaShippingFast />,
                title: "Fast, Free Shipping",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, non!"
            },
            {
                id: 2,
                icon: <FaRedo />,
                title: "Free Returns",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, non!"
            },
            {
                id: 3,
                icon: <FaMoneyBill />,
                title: "Moeny Back Guarantee",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, non!"
            }
        ]
    };
    render() {
        return (
            <ServicesWrapper className="py-5">
                <div className="container">
                    <div className="row">
                        {this.state.services.map(items => {
                            return(
                                <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={items.id}>
                                    <div className="service-icon">{items.icon}</div>
                                    <div className="mt-3">{items.title}</div>
                                    <div className="mt-3">{items.text}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </ServicesWrapper>
        )
    }
}

const ServicesWrapper = styled.section`
    background: rgba(45,25,55,0.2);
    color: #f5f5f5;
    .service-icon{
        font-size: 2rem;
        color: var(--primaryColor);
    }
`;
