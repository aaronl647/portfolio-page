import React from "react";
import "./Sections.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function AboutSection() {
  return (
    <>
      <div className="about-container">
        <p className="about-content">Test</p>
      </div>
      <div className="social-links">
        <Link
          to="https://github.com/aaronl647"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "fa-github"]} />
        </Link>
      </div>
    </>
  );
}

export default AboutSection;
