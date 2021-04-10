import React from "react";
import { Button } from "../Button/Button";
import "./MainSection.css";

function MainSection() {
  return (
    <div>
      <div className="main-container">
        <video src="/videos/video2.mov" autoPlay loop muted />
        <h1>Aaron Lei</h1>
        <div className="main-btn">
          <Button
            className="btn"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            PROJECTS
          </Button>
          <Button
            className="btn"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            CONTACT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
