import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

function NavBar() {
  const [showmenu, setShowmenu] = useState(true);
  const [close, setClose] = useState(false);

  const hanling = () => {
    setShowmenu(!showmenu);
    setClose(!close);
  };

  const closeMenu = () => {
    if (!showmenu) {
      setShowmenu(true);
      setClose(false);
    }
  };
  return (
    <div className="nav-bar" >
      <div className="nav-bar-container" onClick={closeMenu}>

        <Link to="/" className="nav-logo" onClick={closeMenu}>
          Travel <i className="fa-solid fa-mountain-sun fa-sm "></i>
        </Link>
        <div className="menu-icon" onClick={hanling}>
          <i className={showmenu ? "fas fa-bars " : "fas fa-times "}></i>
        </div>

        <ul className={close ? "nav-menu active" : "nav-menu "}>
          <li>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li>
            <Link to="/servic" className="nav-links">
              Service
            </Link>
          </li>
          <li>
            <Link to="/contect" className="nav-links">
              Contect
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
