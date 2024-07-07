import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">NEXCENT</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Service
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Feature
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Product
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button style={{color:"green",border:"2px solid green",width:"100px"}} >Sign In</button>
        </Link>
        <Link to="contact" spy={true} smooth={true}>
        <button style={{backgroundColor:"green",width:"100px",color:"white",border:"none",marginLeft:"20px"}} >Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
