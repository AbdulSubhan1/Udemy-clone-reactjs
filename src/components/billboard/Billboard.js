import React from "react";
import billboardImg from "../../assets/img/billboard-img.jpg";

const Billboard = () => {
  return (
    <div className="billboard-contanier">
      <div className="billboard-img-container">
        <img src={billboardImg} alt="billboardImage" />
      </div>
      <div className="billboard-content-box">
        <h1>Millions learn here</h1>
        <p>Get trusted courses from $13.99 — today only</p>
        <div className="search-bar">
          <input
            type="text"
            name="billboardSearch"
            id="billboardSearch"
            placeholder="What do you want to learn?"
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
