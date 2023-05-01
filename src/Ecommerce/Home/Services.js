import React from "react";

export default function Services() {
  return (
    <>
      <div className="serviceSection">
        <div className="serviceHeader">
          <h4>Our Services</h4>
        </div>
        <div className="serviceContainer">
          <div className="serviceBoxes">
            <div className="logo">
              <i class="fa-solid fa-truck fa-2x"></i>
            </div>
            <div className="logoName">
              <p>Super Fast and Free Delivery</p>
            </div>
          </div>
          <div className="serviceBox2">
            <div className="serviceBoxes">
              <div className="logo">
                <i class="fa-solid fa-2x fa-address-book"></i>
              </div>
              <div className="logoName">
                <p>Non-Contact Shipping</p>
              </div>
            </div>
            <div className="serviceBoxes">
              <div className="logo">
                <i class="fa-solid fa-2x fa-money-bill-transfer"></i>
              </div>
              <div className="logoName">
                <p>Money-back Guaranteed</p>
              </div>
            </div>
          </div>
          <div className="serviceBoxes">
            <div className="logo">
              <i class="fa-solid fa-2x fa-money-bill-1-wave"></i>
            </div>
            <div className="logoName">
              <p>Super Secure Payment System</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
