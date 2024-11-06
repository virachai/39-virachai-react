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
        <NavbarItem
          text="Github"
          target="_blank"
          link="https://github.com/virachai/39-virachai-react"
        />
      </ul>
    </nav>
  );
};

export default Navbar;
