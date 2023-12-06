import React from "react";
import logo from "../../../assets/Logo.png";
import "./header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand logonav" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler bg-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 sidenav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Order
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Order Review
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Manage Inventory
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
