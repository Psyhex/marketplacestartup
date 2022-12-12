import React from "react";
import { useState } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { ABOUT, ADD_SERVICE, HOME, SERVICES } from "../../constants/routes";
import { NAV_BAR_ABOUT, NAV_BAR_ADD_SERVICE, NAV_BAR_HOME, NAV_BAR_SERVICES, NAV_BAR_TITLE } from "../../constants/navbartitles";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to={HOME} className="navbar-logo" onClick={closeMobileMenu}>
              {NAV_BAR_TITLE}
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to={HOME}
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  {NAV_BAR_HOME}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={ABOUT}
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  {NAV_BAR_ABOUT}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={SERVICES}
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  {NAV_BAR_SERVICES}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={ADD_SERVICE}
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                {NAV_BAR_ADD_SERVICE}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
