import React from "react";
import { useLocation } from "react-router-dom";

import "./Users.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = () => {
  const location = useLocation();

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2" style={{ marginTop: "30px" }}>
        <h1
          style={{
            fontWeight: "400",
            textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Users
        </h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
