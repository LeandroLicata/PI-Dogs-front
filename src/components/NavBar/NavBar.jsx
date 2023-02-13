import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import icon from "../../assets/icon.png";
import "./NavBar.css"

const Navbar = () => {
  return (
    <nav className="header">
      <NavLink to="/home" className="logo">
        <h1 className="home_title">The Dog Wiki</h1>
        <img src={icon} alt="icon" style={{ height: 50 }} />
      </NavLink>
      <SearchBar />
      <NavLink to="/addbreed">
        <button className="breed_button">Add Breed</button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
