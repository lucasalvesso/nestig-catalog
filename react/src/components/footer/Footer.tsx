import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <div className="footer-heading">
            <span>Gift & Decorations Store</span>
          </div>
        </div>
        <div className="footer-column">
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-row footer__second-row">
        <div className="footer-column">
          <div className="copyright">
            Copyright © 2023 Gift & Decoration Store. All rights reserved
          </div>
          <div>
            <a href="#">Privacy Policy</a>
          </div>
          <div>
            <a href="#">Terms of Use</a>
          </div>
        </div>
        <div className="footer-column">
          <div className="social-icons">
            <span role="img" aria-label="Facebook" className="icon">
              📘
            </span>
            <span role="img" aria-label="Twitter" className="icon">
              🐦
            </span>
            <span role="img" aria-label="Instagram" className="icon">
              📸
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
