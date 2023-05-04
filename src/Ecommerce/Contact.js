import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="contactContainer">
        <div className="contactHeader">
          <h2>Follow Us</h2>
        </div>
        <div className="logoContainer">
          <Link to="https://www.facebook.com" target="_blank" className="links">
            <div className="logoSection">
              <div className="logo">
                <i class="fa-brands fa-2x fa-facebook"></i>
              </div>
              <div className="logoname">Facebook</div>
            </div>
          </Link>
          <Link
            className="links"
            to="https://www.instagram.com"
            target="_blank"
          >
            <div className="logoSection">
              <div className="logo">
                <i class="fa-brands fa-2x fa-instagram"></i>
              </div>
              <div className="logoname">Instagram</div>
            </div>
          </Link>
          <Link
            className="links"
            to="https://www.twitter.com"
            target="_blank"
          >
            <div className="logoSection">
            <div className="logo">
              <i class="fa-brands fa-2x fa-twitter"></i>
            </div>
            <div className="logoname">Twitter</div>
          </div>
          </Link>
        </div>

        <div className="contactsection">
          {/* <h4>Lets Shop</h4> */}
          <p className="contactPara">Basundhara-4, Kathmandu</p>
          <p className="contactPara">9845445600</p>
          <p className="contactPara">exampleaddress@gmail.com</p>
        </div>
        <div className="contactHeader">
          <h2>Contact Us</h2>
        </div>
        <div className="logoContainer">
          <div className="logoSection">
            <div className="logo">
              <i className="fa-solid fa-2x fa-envelope"></i>
            </div>
            <div className="logoname">Email</div>
          </div>
          <div className="logoSection">
            <div className="logo">
              <i className="fa-solid fa-2x fa-phone"></i>
            </div>
            <div className="logoname">Phone</div>
          </div>
          <div className="logoSection">
            <div className="logo">
              <i class="fa-solid fa-2x fa-message"></i>
            </div>
            <div className="logoname">Message</div>
          </div>
        </div>
      </div>
      <div className="messageContainer">
        <div className="messageSection1">
          <div className="infoBox">
            <p className="messageText">Message Us</p>
            <br />
            <br />
            <p className="storeDescription">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              explicabo nihil quisquam labore aspernatur ad quibusdam alias iure
              atque mollitia! Soluta ut, iure mollitia necessitatibus omnis
              error quas praesentium facilis autem odio. Repudiandae,
              voluptatibus laboriosam.
            </p>
            <br />
          </div>
        </div>
        <div className="messageSection2">
          <div className="form">
            <input
              className="input-form form-input"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
            <input
              className="input-form form-input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <textarea
              name="text"
              className="input-form textarea form-input"
              id="text"
              cols="30"
              rows="10"
            ></textarea>
            <button className="button">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
