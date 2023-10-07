import React from "react";
import NavLogo from "./NavLogo";
import NavContent from "./NavContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { collapseMenu } from "../../store/actions";
import { connect } from "react-redux";

const Navigation = ({ collapseMenu, toggleMenu }) => {
  let navClass = ["navbar"];
  if (collapseMenu) {
    navClass = [...navClass, "navbar-collapse"];
  }
  return (
    <div className={navClass.join(" ")}>
      <div className="navbar-wrapper">
        <div
          className={`navbar-header ${collapseMenu ? "navbar-collapse" : ""}`}
        >
          <NavLogo collapseMenu={collapseMenu} />
          <a href="#!" className="navbar-toggle">
            <FontAwesomeIcon
              icon={collapseMenu ? faClose : faBars}
              onClick={() => toggleMenu()}
              className={collapseMenu ? "on" : ""}
            />
          </a>
        </div>
        <NavContent />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collapseMenu: state.reducer.collapseMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(collapseMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
