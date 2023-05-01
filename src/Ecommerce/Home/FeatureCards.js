import React from "react";
import { Link } from "react-router-dom";
import MacBook_Air_13 from '../images/MacBook_Air_13.jfif'
import Lenovo from '../images/Lenovo.png'
import LED_Digital_Watch from '../images/LED_Digital_Watch.jfif'


export default function FeatureCards() {
  return (
    <>
      <div className="specialFeatureContainer">
        <div className="featureCardheader">
          <h4>Our Special Products</h4>
        </div>
        <div className="featureCardsContainer">
          {/* <div className="row"> */}
          <div className="featureCard">
            <Link className="links" to="">
              <div className="card">
                <div className="card-body featuredimage">
                  <img src={MacBook_Air_13} alt="" />
                  </div>
                  <div className="card-textuals">
                    <p className="card-title">MacBook</p>
                    <p className="card-price">$1500.00</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="featureCard">
            <Link className="links" to="">
              <div className="card">
                <div className="card-body featuredimage">
                  <img src={Lenovo} alt="" />
                  </div>
                  <div className="card-textuals">
                    <p className="card-title">Lenovo Ideapad</p>
                    <p className="card-price">$1000.00</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="featureCard">
            <Link className="links" to="">
              <div className="card">
                <div className="card-body featuredimage">
                  <img src={LED_Digital_Watch} alt="" />
                  </div>
                  <div className="card-textuals">
                    <p className="card-title">Smart Watch</p>
                    <p className="card-price">$900.00</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
