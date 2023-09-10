import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./dashboard.css";
import Input from "../../components/input/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBell,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Projects } from "./Projects";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const loadProjects = async () => {
    let res = await fetch("http://localhost:5000/get_2projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    let data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    loadProjects();
  }, []);
  return (
    <div className="dashboard-wrapper">
      <div className="top-bar">
        <Input label="" placeholder="search" />
        <div className="icons">
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faUserPlus} />
        </div>
      </div>
      <div className="heading">
        <div className="title">
          <h2>Projects</h2>
          <button>Create New project</button>
        </div>
        <div className=" projekti">
          {projects &&
            projects.map((project) => {
              return <Projects {...project} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
