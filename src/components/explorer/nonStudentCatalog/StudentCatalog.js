import React from "react";

const StudentCatalog = () => {
  return (
    <div className="student-catalog-container">
      <div className="student-catalog-wrapper">
        <div className="catalog-container">
          <div className="catalog-img">
            <img
              src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-teacher.jpg"
              alt=""
            />
          </div>
          <div className="catalog-content">
            <h2>Become an instructor</h2>
            <p>
              Top instructors from around the world teach millions of students
              on Udemy. We provide the tools and skills to teach what you love.
            </p>
            <button className="btn signup-btn">Start teaching today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCatalog;
