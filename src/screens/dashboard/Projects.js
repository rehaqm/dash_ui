import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./projects.css";
export const Projects = ({ title, icon, count = "0%", completed }) => {
  return (
    <div className="project">
      <div className="heading">
        <h5>{title}</h5>
        <FontAwesomeIcon icon={icon} alt="icon" />
      </div>
      <h1>{count}</h1>
      <p>{completed} completed</p>
    </div>
  );
};
