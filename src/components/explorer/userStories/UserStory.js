import React from "react";

const UserStory = () => {
  return (
    <div className="user-story-container">
      <div className="user-story-media-container">
        <div className="video-div">
          <iframe
            className="lyt-activated"
            title="Mohamad Alaloush's Story"
            width="560"
            height="315"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
            src="https://www.youtube.com/embed/QFIhEmOd6No/?autoplay=1"
          ></iframe>
        </div>
      </div>
      <div className="user-story-content">
        <h3>Transform your life through eduction</h3>
        <p>
          Mohamad Alaloush launched a new career in software development by
          taking courses on Udemy. What will you be able to do?
        </p>
      </div>
    </div>
  );
};

export default UserStory;
