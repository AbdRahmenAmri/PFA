import React from 'react'
import "./header.css"
import logo from "../IMG-20220426-WA0014-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faCommentDots,
    faBell,
    faUser,
    faDoorOpen,
    faMoon,
    faSun,
  } from "@fortawesome/free-solid-svg-icons";
  import {Link} from "react-router-dom"
  import { useState } from "react";
  import $ from "jquery";
function Header() {
    const [mode, setMode] = useState(false);
    function handdleMode() {
      setMode(!mode);
    }
  
    if (mode) {
      $(":root").css("--lightMode_backgroundColor", "#18191a");
      $(":root").css("--lightMode_headerColor", "#242526");
      $(":root").css("--lightMode_sections", "#242526");
      $(":root").css("--lightMode_fontColor", "#e4e6eb");
      $(":root").css("--lightMode_svgColor", "#e4e6eb");
    } else {
      $(":root").css("--lightMode_backgroundColor", "#f3f6f8");
      $(":root").css("--lightMode_headerColor", "#44c0fa");
      $(":root").css("--lightMode_sections", "#ffffff");
      $(":root").css("--lightMode_fontColor", "#00000091");
      $(":root").css("--lightMode_svgColor", "#44c0fa");
    }
  return (
    <header>
    <img className="img1" src={logo} alt="logo" />
    <form class="search-container">
      <input
        type="text"
        id="search-bar"
        placeholder="What subject you wanna learn today?"
      />
    </form>

    <nav>
      <ul>
        <Link to="/home">
          <li>
            <FontAwesomeIcon icon={faHouse} />
            Home
          </li>
        </Link>
        <Link to="/chat">
          <li>
            <FontAwesomeIcon icon={faCommentDots} /> Messages
          </li>
        </Link>
        <Link to="/noftifications">
          <li>
            <FontAwesomeIcon icon={faBell} />
            Notifications
          </li>
        </Link>
        <Link to="/profile">
          <li>
            <FontAwesomeIcon icon={faUser} />
            Profile
          </li>
        </Link>
      </ul>
    </nav>

    <div className="user">
      <FontAwesomeIcon
        icon={mode ? faSun : faMoon}
        onClick={handdleMode}
      />
      <Link to="/login">
        <FontAwesomeIcon icon={faDoorOpen} />
      </Link>
    </div>
  </header>
  )
}

export default Header