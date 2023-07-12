import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {faTruck} from "@fortawesome/free-solid-svg-icons"

export const Footer = () => {
  return (
    <div className="footer">
      <br></br>
      <br />
      <h2>Contactanos</h2>
      <div className="div-footer">
        <div className="div-contacto">
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          <a className="a-footer" href="https://www.instagram.com/west.smoke_/">
            <p>west.smoke_</p>
          </a>
        </div>
        <div className="div-contacto">
          <FontAwesomeIcon className="icon" icon={faWhatsapp} />
          <a className="a-footer" href="http://wa.me/+5493764216818">
            <p>3764216818</p>
          </a>
        </div>
      </div>
      <br />

      <br></br>

      <p className="p-footer">west smoke © 2023</p>

    </div>
  );
};
