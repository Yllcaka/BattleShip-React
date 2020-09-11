import React from "react";

import { ReactComponent as Logo } from "../Images/logo.svg";

import githubLogo from "../Images/github-logo.svg";
import "../css/style.css";
import "../css/animation.css";
const NavBar = () => {
  let gitHubLink = "https://github.com/Yllcaka/Weather-App-React";

  return (
    <nav className="main-nav">
      <li className="logo">
        <Logo />
      </li>
      <li>
        <h1 className="app-title">BATTLESHIP</h1>
      </li>
      <li className="github-logo">
        <a href={gitHubLink} target="blank">
          <img src={githubLogo} alt="source-code" className="github-logo" />
        </a>
      </li>
    </nav>
  );
};

export { NavBar };
