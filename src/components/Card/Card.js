import React from "react";
import CardItem from "../CardItem/CardItem";
import "./Card.css";

function Card() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/finances.jpg"
              text="Monthly Budgeting App &nbsp; "
              description="The idea for this project came from a book."
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
