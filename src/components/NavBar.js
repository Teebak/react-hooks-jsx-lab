import React from "react";
import Home from "./Home";
import About from "./About";

function NavBar() {
  
  return <nav>
   <a href={Home}>Home</a>
    <a href={About}>About</a>

  </nav>;
}

export default NavBar;
