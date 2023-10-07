import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { collapseMenu } from "../../store/actions";

const Header = ({ collapseMenu, toggleMenu }) => {
  return (
    <header>
      <ul className="header-nav">
        <li>
          <input type="text" placeholder="Search here" />
        </li>
        <li style={{ paddingRight: "20px" }}>
          <a href="#!">
            <FontAwesomeIcon
              icon={collapseMenu ? faBars : faClose}
              onClick={() => toggleMenu()}
            />
          </a>
        </li>
      </ul>
    </header>
  );
};

const mapStateToProps = (state) => ({
  collapseMenu: state.reducer.collapseMenu,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(collapseMenu()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
