import React from "react";
import CardItem from "../CardItem/CardItem";
import "./Card.css";

function Card() {
  return (
    <div className="cards">
      <h1> PROJECTS</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src=""
              text="Monthly Budgeting App"
              label="MERN Stack Project"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
