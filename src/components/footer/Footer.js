import React from "react";
import Link from "./footerLinks/Link";
import footerLink from "../../data/footerLinks.json";

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <div className="link-container">
          <div className="footer-btn-container">
            <button className="footer-btn">
              <i className="fas fa-globe "></i>
              <span>English</span>
            </button>
          </div>
          <Link footerlink={footerLink} />
        </div>
        <div className="logo-copyright">
          <div className="logo-container">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"
              alt=""
            />
          </div>{" "}
          <div className="copyright">© 2021 Udemy, Inc.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
