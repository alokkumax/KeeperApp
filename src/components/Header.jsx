import React from "react";
import dp from "../assets/dp.jpg"
function Header(){
    return(
        <header>
            <h1>keep</h1>
            <div className="navItems">
                <span>contact</span>
                <span>github</span>
                <img src={dp}/>
            </div>
        </header>
    )
}
export default Header;
