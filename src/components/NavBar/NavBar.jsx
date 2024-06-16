import React from "react";
import "./NavBar.css"

function Nav() {
  return (
    <nav>
      <div className="logo">LOGO</div>
      <ul>
        <li>
          <a href="home-header">Home</a>
        </li>
        <li>
          <a href="store">Store</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
