import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import PersonIcon from "@mui/icons-material/Person";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarwrapper">
        <div className="navLogo">
          <Link to="/">
            <img src="/img/diulogoside.png" alt="" />
          </Link>
        </div>
        <div className="navMenu">
          <div className="menu">
            <Link className="link" to="/profile">
              Profile
            </Link>
          </div>
          <div className="menu">
            <Link className="link" to="/changePassword">
              Change Password
            </Link>
          </div>
          <div className="menu">
            <Link className="link" to="/facilites">
              {" "}
              Facilites
            </Link>
          </div>
          <div className="menu">
            <Link className="link" to="/location">
              Location
            </Link>
          </div>
          <div className="menu">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <Link className="link" to="/login">
          <div className="userInfo">
            <PersonIcon />
            <p>Login</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
