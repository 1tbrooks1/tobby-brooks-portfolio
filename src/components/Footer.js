import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <GitHubIcon/>
        <FacebookIcon/>
        <EmailIcon/>
      </div>
      <p>&copy; 2022 TobbyBrooks</p>
    </div>
  );
}

export default Footer;
