import React from "react";
import logo from "../../assets/img/udemy-logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="gradient-line"></div>
      <div className="header-container">
        <img src={logo} alt="logo" className="logo" />
        {/* <div>Udemy</div> */}
        <p>Categories</p>
        <div className="search-box">
          <span>
            <i className="fas fa-search"></i>
          </span>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search for anything"
          />
        </div>

        <nav>
          <ul className="nav-container">
            <li>
              <a href="/">Udemy For Business</a>
            </li>
            <li>
              <a href="/">Teach on Udemy</a>
            </li>
            <li>
              <i className="fas fa-shopping-cart"></i>
            </li>
            <li>
              <button className="btn login-btn">Log In</button>
            </li>
            <li>
              <button className="btn signup-btn ">Sign Up</button>
            </li>
            <li>
              <button className="lang-btn">
                <i className="fas fa-globe "></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
