import React from "react";
import "./Navbar.css";
import { BsListUl } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="nav-bar-flex-div">
      <div className="nav-bar-width-div">
        <div className="nav-bar-main-div">
          <div className="nav-bar-sub-div-one">
            <BsListUl className="nav-bar-sub-div-one-icon"/>
          </div>
          <div className="nav-bar-sub-div-two">
            <button className="nav-bar-sub-div-btn">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
