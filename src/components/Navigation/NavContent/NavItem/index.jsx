import React from "react";
import "./nav-item.css";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ name, icon, setActive, active, path }) => {
  const history = useHistory();
  const handleItemClick = () => {
    setActive(name);
    history.push(path);
  };
  return (
    <li
      className={`nav-item ${active === name ? "active" : ""}`}
      onClick={handleItemClick}
    >
      <a>
        <span className="icon">
          <FontAwesomeIcon icon={icon} />
        </span>
        <span className="item-name">{name}</span>
      </a>
    </li>
  );
};

export default NavItem;
