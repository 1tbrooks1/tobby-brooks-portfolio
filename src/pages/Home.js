import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Tobby</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon/>
          <EmailIcon/>
          <GitHubIcon/>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End </h2>
            <span> HTML, CSS, JavaScript, React </span>
          </li>
          <li className="item">
            <h2> Back-End </h2>
            <span> NodeJS, ExpressJS, GraphQL, MySQL, NoSQL MongoDB </span>
          </li>
          <li className="item">
            <h2> Version Control/Deployment </h2>
            <span> Git, Heroku</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
