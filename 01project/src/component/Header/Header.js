import React from "react";
import styles from "./Header.css";

function Header(props) {
  return (
    <div className="Header">
      <div className="HeaderName">SSM`s Portfolio</div>
      <ul className="Nav">
        <li>ABOUT ME</li>
        <li>SKllS</li>
        <li>PURPOSE</li>
        <li>PROJECT</li>
        <li>QUESTION</li>
      </ul>
    </div>
  );
}

export default Header;
