import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="footer_sec py-4">
        <nav className=" navbar-expand-sm f_menunavbar-dark">
          <div className="container">
            <div className="row align-items-center ">
              <span className="col-lg-4 copyright" to="/">
                Copyright © 2022 Get Pro Writer All Right Reserved
              </span>
              <div className=" col-lg-8 copyright">
                <ul className="footer-navbar-nav">
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1" to="/terms">
                      Terms
                    </Link>
                  </li>
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1" to="/privacy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1" to="/faq">
                      FAQ
                    </Link>
                  </li>
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1" to="/author">
                      Authors
                    </Link>
                  </li>
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1" to="/career">
                      Career
                    </Link>
                  </li>
                  <li className="nav-item pad-footer">
                    <Link className="nav-link set1" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Footer;
