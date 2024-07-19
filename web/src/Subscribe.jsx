import React from 'react';
import "./Subscribe.css"


const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <h1 className="subscribe-title">SUBSCRIBE</h1>
      <p className="subscribe-subtitle">Sign-up to our newsletter</p>
      <form className="subscribe-form">
        <input
          className="email-input"
          type="email"
          placeholder="Your email"
        />
        <button className="submit-button" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Subscribe;