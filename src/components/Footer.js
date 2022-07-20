import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/tobby-brooks/"><LinkedInIcon/></a>
      <a href="https://github.com/1tbrooks1"><GitHubIcon/></a>
        <a href="mailto:tobbyb321@gamil.com"><EmailIcon/></a>
      </div>
      <p>&copy; 2022 TobbyBrooks</p>
    </div>
  );
}

export default Footer;
