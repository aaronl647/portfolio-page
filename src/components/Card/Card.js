import React from "react";
import CardItem from "../CardItem/CardItem";
import "./Card.css";

function Card() {
  return (
    <div className="card-container">
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="images/finances.jpg"
                label="Monthly Budgeting App"
                path="https://github.com/aaronl647/monthlyBudgetApp"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
