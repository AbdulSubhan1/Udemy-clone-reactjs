import React from "react";

const TopicCard = ({ topicData }) => {
  const topicList = topicData.map((data, index) => {
    const list = data.topics.map((topic, index) => {
      return (
        <div className="topics-wrapper" key={index}>
          <h4 className="heading-primary">{topic.title}</h4>
          <p>{topic.no_students}</p>
        </div>
      );
    });
    return (
      <div key={index}>
        <h4>{data.category}</h4>
        {list}
      </div>
    );
  });

  return <div className="tranding-topics-container">{topicList}</div>;
};

export default TopicCard;
