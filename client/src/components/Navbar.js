import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
          el.addEventListener("click", () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
          });
        });
      }
    });
  }
  render() {
    return (
      <nav
        className="navbar is-dark is-fixed-top"
        role="navigation"
        aria-label="main navigation">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            React with different Functionalities
          </a>
          <button
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a href="/" className="navbar-link">
                Functionalities
              </a>

              <div className="navbar-dropdown">
                <Link to="/infinitescroll" className="navbar-item">
                  Infinite Scroll
                </Link>
                <Link to="/pagination" className="navbar-item">
                  Pagination
                </Link>
                <Link to="/fileupload" className="navbar-item">
                  File Upload
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
