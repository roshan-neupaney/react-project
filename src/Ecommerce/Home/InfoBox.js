import React from "react";
import { Link } from "react-router-dom";

export default function InfoBox(props) {
  return (
    <>
      <div>
        <div className="introContainer">
          <div className="info">
            <div className="infoBox">
              <p className="greetingText">{props.greetingText}</p><br />
              <p className="storeName">{props.storeName}</p><br />
              <p className="storeDescription">
                {props.storeDescription}
              </p><br />
              <Link className="btnLink" to="/products">
                <button type="button" className="button">
                  {props.buttonText}
                </button>
              </Link>
            </div>
            <div className="infoImage">
              <div className="emptyBox"></div>
              <img src={props.storeImage} className="storeImage" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
