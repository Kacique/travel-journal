import React from "react";
import Logo from "./images/logo.png";

function Nav() {
  return (
    <nav>
      <img src={Logo} alt="earth-logo" />
      <p> My travel journal</p>
    </nav>
  );
}

export default Nav;
