import React from "react";
import CategoryCard from "../categoryCard/CategoryCard";
import data from "../../../data/topCategorie.json";

const Category = () => {
  return (
    <section className="category-section">
      <h3>Top categories</h3>
      <div className="category-card-container">
        <CategoryCard data={data} />
      </div>
    </section>
  );
};

export default Category;
