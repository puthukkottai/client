import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { Video } from "../../components/Video/Video";

const Videos = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <h1
          style={{
            marginTop: "50px",
            fontWeight: "400",
            textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Video
        </h1>
        <p>All doubts clarify the videos</p>
        <Video />
      </div>
    </div>
  );
};

export default Videos;
