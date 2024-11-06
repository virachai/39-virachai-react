// src/components/Navbar/NavbarItem.jsx
// import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import uiStyles from "./NavbarItem.module.css";

const NavbarItem = ({ text, link, target }) => {
  return (
    <li className={`${uiStyles.navbarItem}`}>
      {" "}
      <Link to={link} target={target ? "_blank" : undefined}>
        {text}
      </Link>{" "}
    </li>
  );
};

NavbarItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  target: PropTypes.string,
};

export default NavbarItem;
