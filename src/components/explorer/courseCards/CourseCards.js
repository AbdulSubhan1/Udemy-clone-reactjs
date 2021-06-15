import React from "react";
import data from "../../../data/courseCardsData.json";

const CourseCards = () => {
  return (
    <div className="cards-container">
      {data.map((card) => {
        return (
          <div className="cards" key={card.id}>
            <div className="cards-img">
              <img src={card.img} alt="" />
            </div>
            <h3>{card.title.slice(0, 20)}...</h3>
            <p>{card.auther.slice(0, 30)}...</p>
            <p>
              <span className="rating">{card.rating}</span>{" "}
              <span>{card.no_students}</span>
            </p>
            <h4>{card.price}</h4>
            {card.isBestSeller === "true" ? (
              <div className="tag">BestSeller</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default CourseCards;
