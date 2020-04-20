import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context/Context";

export default function Footer() {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p>Copyright &copy; Tech Store {new Date().getFullYear()}</p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {value.socialLinks.map((item) => (
                    <a href={item.url} key={item.id}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const FooterWrapper = styled.footer`
  background: var(--primaryColor);
  color: var(--mainBlack);
  .icon {
    font-size: 1.5rem;
    color: var(--mainPeach);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--darkPeach);
  }
`;
