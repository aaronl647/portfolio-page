import React from "react";
import { Button } from "../Button/Button";
import "./MainSection.css";
import ReactJsTyping from "reactjs-typing-effect";

function MainSection() {
  const list = ["Aaron Lei."];
  const about = [
    `Full Stack Engineer | HTML5/CSS3 | JavaScript | Express | Node.JS | MongoDB | Python | Jupyter Notebooks | SQL | Django | ReactJS`,
  ];
  return (
    <div>
      <div className="main-container">
        <video src="/videos/video2.mov" autoPlay loop muted />
        <div
          className="title-container"
          style={{ fontSize: 100, color: "#fff" }}
        >
          <ReactJsTyping StringList={list} speed={10000000} />
        </div>
        <div className="text-container" style={{ fontSize: 20, color: "#fff" }}>
          <ReactJsTyping StringList={about} speed={20000} />
        </div>
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
