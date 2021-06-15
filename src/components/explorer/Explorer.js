import React from "react";
import Category from "./category/Category";
import CourseContainer from "./courseContainer/CourseContainer";
import ExploreNav from "./exploreNav/ExploreNav";
import StudentCatalog from "./nonStudentCatalog/StudentCatalog";
import UfbStudentCatalog from "./nonStudentCatalog/ufbStudentcatalog/UfbStudentCatalog";
import Partners from "./partner/Partners";
import StudentViewing from "./studentsViewing/StudentViewing";
import TrandingTopics from "./trandingTopics/TrandingTopics";
import UserStory from "./userStories/UserStory";

const Explorer = () => {
  return (
    <div className="explorer-container">
      <h1>The world's largest selection of courses</h1>
      <p>
        Choose from 155,000 online video courses with new additions published
        every month
      </p>
      <ExploreNav />
      <CourseContainer />
      <StudentViewing />
      <Category />
      <TrandingTopics />
      <StudentCatalog />
      <Partners />
      <UfbStudentCatalog />
      <UserStory />
    </div>
  );
};

export default Explorer;
