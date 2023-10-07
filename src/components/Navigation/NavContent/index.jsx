import React, { useState } from "react";
import NavItem from "./NavItem";
import {
  faContactCard,
  faHome,
  faInfoCircle,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
const NavContent = () => {
  const [active, setactive] = useState("Home");
  console.log(active);
  return (
    <div className="nav-content-container">
      <ul className="navbar-list">
        <NavItem
          name="Home"
          icon={faHome}
          setActive={setactive}
          active={active}
          path="/"
        />
        <NavItem
          name="About Us"
          icon={faInfoCircle}
          setActive={setactive}
          active={active}
          path="/aboutUs"
        />
        <NavItem
          name="Services"
          icon={faCogs}
          setActive={setactive}
          active={active}
          path="/services"
        />
        <NavItem
          name="Contact"
          icon={faContactCard}
          setActive={setactive}
          active={active}
          path="/contact"
        />
      </ul>
    </div>
  );
};

export default NavContent;
