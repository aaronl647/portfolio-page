import React from "react";
import Button from "../Button/Button";
import "./CardItem.css";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Budget App"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            <div className="card__item__buttons">
              <div className="card__item__wrapper">
                <Button
                  onClick={() => {
                    window.open(
                      "https://github.com/aaronl647/monthlyBudgetApp"
                    );
                  }}
                  path="/projects"
                >
                  View Code
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  onClick={() => {
                    window.open(
                      "https://github.com/aaronl647/monthlyBudgetApp"
                    );
                  }}
                  path="/projects"
                >
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
