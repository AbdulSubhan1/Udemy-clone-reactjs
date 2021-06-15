import React from "react";
import avatar from "../../../assets/img/course-card-intro.jpg";
import CourseCards from "../courseCards/CourseCards";

const CourseContainer = () => {
  return (
    <div className="course-container">
      <div className="course-container-intro-card">
        <div className="course-container-intro">
          <h2>Expand your career opportunities with Python</h2>
          <p>
            Whether you work in machine learning or finance, or are pursuing a
            career in web development or data science, Python is one of the most
            important skills you can learn. Python's simple syntax is especially
            suited for desktop, web, and business
          </p>
          <button className="btn login-btn">Explore Python</button>
        </div>
        <img src={avatar} alt="" />
      </div>
      <CourseCards />
    </div>
  );
};

export default CourseContainer;
