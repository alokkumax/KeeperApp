import { Box } from "@mui/material";
import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer (){
    var year = new Date().getFullYear();
    return(
        <Box className="footer">
            {/* <hr/> */}
            <div>
                <a >alokkumax1@gmail.com</a>
                <span>Feel free to use ❤️ by <a target="_blank" href="https://github.com/alokkumax">Alok</a></span>
                <div>
                    <a target="_blank" href="https://twitter.com/alokkumax11"> <TwitterIcon/></a>
                    <a target="_blank" href="https://github.com/alokkumax"><GitHubIcon/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/alok-kumar-987b4b190/">

                    <LinkedInIcon/>

                    </a>
                </div>
            </div>
        </Box>
    )
}
export default Footer;