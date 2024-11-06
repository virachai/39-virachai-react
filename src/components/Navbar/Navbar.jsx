// src/components/Navbar/Navbar.jsx
// import React from "react";
import NavbarItem from "./NavbarItem";
import uiStyles from "./Navbar.module.css";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={uiStyles.navbar}>
      <ul>
        <NavbarItem text="Home" link="/" />
        <NavbarItem text="Owner" link="/owner" />
        {/* <NavbarItem text="Contact" link="/contact" /> */}
      </ul>
    </nav>
  );
};

export default Navbar;
