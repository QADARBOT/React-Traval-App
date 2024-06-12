import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

function Footer() {
  return (
    <div className="footer">
      <div className="up-footer">
        <div className="logo-footer">
          Travel<i className="fa-solid fa-mountain-sun fa-sm "></i>
        </div>
        <div className="itms-Pags">
          <p className="footer-head">Pages</p>
          <div className="Pges-footer">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
            <Link className="link" to="/servic">
              Service
            </Link>
            <Link className="link" to="/contect">
              Contact
            </Link>
          </div>
        </div>
        <div className="itms">
          <p className="footer-head">Social Media</p>
          <div className="social-footer">
            <Link className="link" to="/">
              <FacebookIcon className="icons-footer" /> <span>Facebook</span>
            </Link>
            <Link className="link" to="/">
              <InstagramIcon className="icons-footer" /> <span>Instagram</span>
            </Link>
            <Link className="link" to="/">
              <XIcon className="icons-footer" /> <span>X</span>
            </Link>
          </div>
        </div>
        <div className="itms">
          <p className="footer-head">Our Team</p>
          <div className="team-footer">
            <p>Khadar Maxamed</p>
            <p>Maxamed Cise</p>
            <p>Sucad Salah</p>
          </div>
        </div>
        
      </div>
      <div className="down-footer">
        <p>&copy; 2024 Travel.com</p>
      </div>
    </div>
  );
}

export default Footer;
