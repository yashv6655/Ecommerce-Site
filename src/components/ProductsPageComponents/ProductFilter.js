import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context/Context";

export default function ProductFilter() {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          search,
          min,
          max,
          company,
          price,
          shipping,
          handleChange,
          storeProducts,
        } = value;

        // Get rid of repeated company names
        let companies = new Set();
        companies.add("all");
        for (let product in storeProducts) {
          companies.add(storeProducts[product]["company"]);
        }
        companies = [...companies];
        //End of companies

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/* Search Bar */}
                <div className="">
                  <label htmlFor="search">Search:</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={handleChange}
                    value={search}
                    className="filter-item"
                  />
                </div>
                {/* End of Seach Bar */}
                {/* Company Search */}
                <div>
                  <label htmlFor="company">Company: </label>
                  <select
                    name="company"
                    id="company"
                    className="filter-item"
                    onChange={handleChange}
                    value={company}
                  >
                    {companies.map((company, index) => {
                      return (
                        <option key={index} value={company}>
                          {company}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* End of Compnay Search */}
                {/* Price Range */}
                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      Price: <span>${price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min={min}
                    max={max}
                    className="filter-price"
                    value={price}
                    onChange={handleChange}
                  />
                </div>
                {/* End of Price Range */}
                {/* Shipping */}
                <div>
                  <label htmlFor="shipping" className="mx-2">
                    Free Shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    onChange={handleChange}
                    checked={shipping && true}
                  />
                </div>
                {/* End of Shipping */}
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1.5rem;
  label {
    font-weight: bold;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.3rem;
    border: 2px solid var(--mainWhite);
    color: var(--mainBlack);
  }
`;
