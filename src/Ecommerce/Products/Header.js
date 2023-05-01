import React,{useState} from 'react'
// import { Link } from "react-router-dom";


export default function Header(props) {

  const [sortByPrice, setSortByPrice] = useState("A-Z")

  return (
    <>
    <div className="headbar">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 searchBar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="headerText">
            <p>{props.arraylength} total products</p>
          </div>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {sortByPrice}
            </button>
            <ul className="dropdown-menu">
              <li>
                <div className="dropdown-item"  onClick=
                  {() => {
                    props.setValue("?sort=asc");
                    setSortByPrice("A-Z");
                  }}>
                  A-Z
                </div>
              </li>
              <li>
                <div className="dropdown-item" onClick=
                  {() => {
                    props.setValue("?sort=desc");
                    setSortByPrice("Z-A");
                  }}>
                Z-A
                </div>
              </li>
            </ul>
          </div>
        </div>
    </>
  )
}
