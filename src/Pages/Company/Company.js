import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Forms from "../../components/Forms/Forms";

const Company = () => {
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
          Company
        </h1>
        <p>Learn about what it's like to work at companies</p>
        <Forms />
      </div>
    </div>
  );
};

export default Company;
