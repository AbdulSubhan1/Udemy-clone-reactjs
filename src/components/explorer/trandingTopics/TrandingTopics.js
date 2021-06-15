import React from "react";
import topicsdata from "../../../data/trandingTopic.json";
import TopicCard from "./TopicCard";

const TrandingTopics = () => {
  return (
    <div className="tranding-topics-section">
      <h2 className="tranding-topics-headings">Featured Topics By Category</h2>

      <TopicCard topicData={topicsdata} />
      <button className="btn signup-btn">Explore more</button>
    </div>
  );
};

export default TrandingTopics;
