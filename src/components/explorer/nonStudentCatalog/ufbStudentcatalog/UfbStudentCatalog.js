import React from "react";

const UfbStudentCatalog = () => {
  return (
    <div>
      <div className="ufb-student-catalog-container">
        <div className="ufb-student-catalog-wrapper">
          <div className="ufb-catalog-container">
            <div className="ufb-catalog-content">
              <h2>Udemy for Business</h2>
              <p>
                Get unlimited access to 5,500+ of Udemy’s top courses for your
                team.
              </p>
              <button className="btn signup-btn">Get udemy for business</button>
            </div>
            <div className="ufb-catalog-img">
              <img
                src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-ufb.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UfbStudentCatalog;
