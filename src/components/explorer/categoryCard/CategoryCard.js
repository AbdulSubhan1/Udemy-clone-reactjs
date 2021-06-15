import React from "react";

const CategoryCard = ({ data }) => {
  const cards = data.map((card, index) => {
    return (
      <div className="category-card" key={index}>
        <div className="category-card-img">
          <img src={card.img} alt="" />
        </div>
        <h4>{card.category}</h4>
      </div>
    );
  });
  return <>{cards}</>;
};

export default CategoryCard;
