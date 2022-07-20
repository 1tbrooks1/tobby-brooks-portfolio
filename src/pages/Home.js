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
          <a href="https://www.linkedin.com/in/tobby-brooks/"><LinkedInIcon/></a>
          <a href="mailto:tobbyb321@gamil.com"><EmailIcon/></a>
          <a href="https://github.com/1tbrooks1"><GitHubIcon/></a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End </h2>
            <span> HTML, CSS, JavaScript, Bootstrap, React </span>
          </li>
          <li className="item">
            <h2> Back-End </h2>
            <span> NodeJS, ExpressJS, Object-Oriented Programming, SQL, MySQL, NoSQL, GraphQL, MongoDB, MERN Stack </span>
          </li>
          <li className="item">
            <h2> Version Control/Deployment </h2>
            <span> Git, GiHub, GitHub Pages, Heroku</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
