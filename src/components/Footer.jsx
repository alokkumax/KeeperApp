import React from "react";

function Footer (){
    var year = new Date().getFullYear();
    return(
        <footer className="">
            copyright {year}
        </footer>
    )
}
export default Footer;