import React, { useState } from "react";
import dp from "../assets/dp.jpg";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () =>{
    setToggle(!toggle)
  }
  return (
    <header>
      <h1>keep</h1>
      <div className="navItems">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/alok-kumar-987b4b190/"
        >
          <span>contact</span>
        </a>

        <a target="_blank" href="https://github.com/alokkumax">
          <span>github</span>
        </a>
        <div onClick={handleToggle}>
        {!toggle ? <LightModeIcon /> : <DarkModeIcon />}

        </div>
      </div>
    </header>
  );
}
export default Header;
