import React, { useState } from "react";
// import { Link } from "react-router-dom";

export default function SideContainer(props) {
  const [rangevalue, setRangevalue] = useState(1000);
  const [company, setCompany] = useState("All")

  const handleInputChange = (event) => {
    setRangevalue(event.target.value);
  };

  return (
    <>
      <div className="sideContainer">
        <div className="categories">
          <h6>Category</h6>
          <div className="category">
            
             <div className="categoryItems"
              onClick={() => {
                props.setValue("");
              }}>
            
              <p className="categoryList">All</p>
              </div>
            <div
              className="categoryItems"
              onClick={() => {
                props.setValue("/category/electronics");
              }}
            >
              <p className="categoryList">Electronics</p>
            </div>
            <div
              className="categoryItems"
              onClick={() => {
                props.setValue("/category/men's%20clothing");
              }}
            >
              <p className="categoryList">Men's</p>
            </div>
            <div
              className="categoryItems"
              onClick={() => {
                props.setValue("/category/jewelery");
              }}
            >
              <p className="categoryList">Jewelery</p>
            </div>
            <div
              className="categoryItems"
              onClick={() => {
                props.setValue("/category/electronics");
              }}
            >
              <p className="categoryList">Electronics</p>
            </div>
            <div
              className="categoryItems"
              onClick={() => {
                props.setValue("/category/women's%20clothing");
              }}
            >
              <p className="categoryList">Women's</p>
            </div>
          </div>
        </div>
{/* .............................................................................. */}
        <div className="company">
          <h6>Company</h6>

          <div className="companies">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {company}
              </button>
              <ul className="dropdown-menu">
                <li
                  className="dropdown-item" onClick=
                  {() => {
                    props.setValue("");
                    setCompany("All");
                  }}>
                  All
                </li>
                <li
                  className="dropdown-item" onClick=
                  {() => {
                    props.setValue("/category/jewelery");
                    setCompany("Apple");
                  }}>
                  Apple
                </li>
                <li
                  className="dropdown-item " onClick=
                  {() => {
                    setCompany("Samsung");
                    props.setValue("/category/men's%20clothing");

                  }}>
                  Samsung
                </li>
                <li
                  className="dropdown-item" onClick=
                  {() => {
                    setCompany("Xaomi");
                    props.setValue("/category/electronics");
                  }}>
                  Xaomi
                </li>
              </ul>
            </div>
          </div>
        </div>
{/* .............................................................................. */}
        <div className="priceCategory">
          <h6>Price</h6>
          <div className="price">Rs.{rangevalue}</div>
          <input
            type="range"
            className="form-range"
            min="0"
            max="1000"
            value={rangevalue}
            onChange={handleInputChange}
            id="customRange1"
          />
        </div>
        <div className="clearFilter">
          <button type="button" className="btn btn-primary clearBtn">
            Clear Filter
          </button>
        </div>
      </div>
    </>
  );
}
