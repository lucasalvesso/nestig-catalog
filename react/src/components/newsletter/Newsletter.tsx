import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2>Join Our Newsletter</h2>
        <p>sign up for deals, new products and promotions</p>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email address" />
            <button type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
