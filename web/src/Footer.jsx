import React from "react";
import "./Footer.css";




const Footer = () => {
  return (
    <div>
      <footer className="footer">

        <ul className="left-section">
          <li className="social-icons">
            <a href="#">
              <img src="\Images\Facebook.PNG" className="social-icon" />
            </a>
            <a href="#">
              <img src="\Images\lk.PNG" className="social-icon" />
            </a>
            <a href="#">
              <img src="\Images\Pintrest.PNG"className="social-icon" />
            </a>
          </li>
        </ul>

        <ul className="right-section">
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">ARTICLES</a>
          </li>
          <li>
            <button className="subscribe-button">Subscribe</button>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;