import React from "react";
// import { Button } from "../Button/Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Thanks for checking out my portfolio!
        </p>
        <p className="footer-subscription-text">
          Feel free to connect with me!
        </p>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/about">
              <h2>About</h2>
            </Link>
          </div>
          <div className="footer-link-items">
            <Link to="/contact">
              <h2>Contact</h2>
            </Link>
          </div>
          <div className="footer-link-items">
            <Link to="/resume">
              <h2>Rėsumė</h2>
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              A. Lei
            </Link>
          </div>
          <small className="website-rights">
            :3: <i class="far fa-copyright"></i> 2021
          </small>
          <div className="social-icons">
            <a
              className="social-icon-link github"
              href="https://github.com/aaronl647"
              target="_blank"
              rel="noreferrer"
              aria-label="github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/aaronl647/"
              target="_blank"
              rel="noreferrer"
              aria-label="linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

//  <div className="input-area">
//    <form>
//      <input
//        type="email"
//        name="email"
//        placeholder="Your Email"
//        className="footer-input"
//      />
//      <Button buttonStyle="btn--outline">Connect</Button>
//    </form>
//  </div>;
