import React from "react";
import { Button } from "../Button/Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Paragraph 1</p>
        <p className="footer-subscription-text">Paragraph 2</p>
        <div className="input-area">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">How it Works</Link>
            <Link to="/">Socials</Link>
            <Link to="/">Testimonials</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">How it Works</Link>
            <Link to="/">Socials</Link>
            <Link to="/">Testimonials</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">How it Works</Link>
            <Link to="/">Socials</Link>
            <Link to="/">Testimonials</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">How it Works</Link>
            <Link to="/">Socials</Link>
            <Link to="/">Testimonials</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              This Is Art
            </Link>
          </div>
          <small className="website-rights">
            :3: <i class="far fa-copyright"></i> 2021
          </small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://github.com/aaronl647"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-github"></i>
            </a>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
